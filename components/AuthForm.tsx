"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { auth } from "@/firebase/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { signIn, signUp } from "@/lib/actions/auth.action";
import FormField from "./FormField";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);

  // 1. Инициализация формы с валидацией и начальными значениями
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Обработчик отправки формы
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        const { name, email, password } = values;

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result?.success) {

          toast.error(result?.message);
          return;
        }

        toast.success("Аккаунт создан успешно! Пожалуйста, авторизуйтесь.");
        router.push("/sign-in");
      } else {
        const { email, password } = values;

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const idToken = await userCredential.user.getIdToken();

        if (!idToken) {
          toast.error("Не удалось получить токен. Попробуйте позже.");
          return;
        }

        await signIn ({
          email, idToken
        })

        toast.success("Авторизация прошла успешно!"); 
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Что-то пошло не так, попробуйте позже: ${error}`);
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />

          <h2 className="text-primary-100">Собеседник</h2>
        </div>

        <h3>Практика собеседований с помощью AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Имя"
                placeholder="Введите ваше имя"
              />
            )}
            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Введите ваш email"
              type="email"
            />

            <FormField
              control={form.control}
              name="password"
              label="Пароль"
              placeholder="Введите ваш пароль"
              type="password"
            />

            <Button className="btn" type="submit">
              {isSignIn ? "Войти" : "Зарегистрироваться"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignIn ? "Нет аккаунта?" : "Уже есть аккаунт?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Войти" : "Зарегистрироваться"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
