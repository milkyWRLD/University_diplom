"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

// ⏳ Продолжительность сессии: 1 неделя (в секундах)
const SESSION_DURATION = 60 * 60 * 24 * 7;

// 🍪 Установка cookie сессии на основе ID токена
export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies();

  // 🔐 Создание серверного cookie-сеанса
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: SESSION_DURATION * 1000, // в миллисекундах
  });

  // 📌 Установка cookie в браузере пользователя
  cookieStore.set("session", sessionCookie, {
    maxAge: SESSION_DURATION,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

// 👤 Регистрация пользователя в Firestore
export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    // 🔍 Проверка: существует ли пользователь
    const userRecord = await db.collection("users").doc(uid).get();
    if (userRecord.exists)
      return {
        success: false,
        message: "Пользователь уже существует. Войдите в аккаунт.",
      };

    // 💾 Сохранение нового пользователя в базе
    await db.collection("users").doc(uid).set({
      name,
      email,
      // profileURL,
      // resumeURL,
    });

    return {
      success: true,
      message: "Аккаунт создан. Войдите в систему.",
    };
  } catch (error: any) {
    console.error("Ошибка при создании пользователя:", error);

    // ⚠️ Обработка специфичных ошибок Firebase
    if (error.code === "auth/email-already-exists") {
      return {
        success: false,
        message: "Этот email уже используется",
      };
    }

    return {
      success: false,
      message: "Не удалось создать аккаунт. Попробуйте ещё раз.",
    };
  }
}

// 🔐 Вход пользователя и установка cookie-сессии
export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  try {
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord)
      return {
        success: false,
        message: "Пользователь не найден. Зарегистрируйтесь.",
      };

    await setSessionCookie(idToken);
  } catch (error: any) {
    console.log("");

    return {
      success: false,
      message: "Не удалось войти. Повторите попытку.",
    };
  }
}

// 🚪 Выход пользователя: удаление cookie
export async function signOut() {
  const cookieStore = await cookies();

  cookieStore.delete("session");
}

// 👁 Получение текущего пользователя на основе cookie-сессии
export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();

  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) return null;

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

    // 📄 Получение данных пользователя из Firestore
    const userRecord = await db
      .collection("users")
      .doc(decodedClaims.uid)
      .get();
    if (!userRecord.exists) return null;

    return {
      ...userRecord.data(),
      id: userRecord.id,
    } as User;
  } catch (error) {
    console.log(error);

    // ❌ Недействительная или просроченная сессия
    return null;
  }
}

// ✅ Проверка, авторизован ли пользователь
export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}
