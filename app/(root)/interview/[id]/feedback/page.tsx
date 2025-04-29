import dayjs from "dayjs";
import "dayjs/locale/ru";
dayjs.locale("ru");

import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Feedback = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <section className="section-feedback">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Отзыв по собеседованию —{" "}
          <span className="capitalize">{interview.role}</span>
        </h1>
      </div>

      <div className="flex flex-row justify-center mt-4">
        <div className="flex flex-row gap-5">
          {/* Общее впечатление */}
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" width={22} height={22} alt="звезда" />
            <p>
              Общее впечатление:{" "}
              <span className="text-primary-200 font-bold">
                {feedback?.totalScore}
              </span>
              /100
            </p>
          </div>

          {/* Дата */}
          <div className="flex flex-row gap-2 items-center">
            <Image src="/calendar.svg" width={22} height={22} alt="календарь" />
            <p>
              {feedback?.createdAt
                ? dayjs(feedback.createdAt).format("D MMMM YYYY, HH:mm")
                : "Неизвестно"}
            </p>
          </div>
        </div>
      </div>

      <hr className="my-6" />

      <p className="mb-6">{feedback?.finalAssessment}</p>

      {/* Детализация интервью */}
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-xl font-semibold">Подробный разбор:</h2>
        {feedback?.categoryScores?.map((category, index) => (
          <div key={index}>
            <p className="font-bold">
              {index + 1}. {category.name} ({category.score}/100)
            </p>
            <p>{category.comment}</p>
          </div>
        ))}
      </div>

      {/* Сильные стороны */}
      <div className="flex flex-col gap-3 mb-6">
        <h3 className="text-lg font-semibold">Сильные стороны</h3>
        <ul className="list-disc list-inside">
          {feedback?.strengths?.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      {/* Зоны для улучшения */}
      <div className="flex flex-col gap-3 mb-6">
        <h3 className="text-lg font-semibold">Зоны для улучшения</h3>
        <ul className="list-disc list-inside">
          {feedback?.areasForImprovement?.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      {/* Кнопки */}
      <div className="buttons flex flex-col sm:flex-row gap-4">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Вернуться в панель управления
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Пройти интервью заново
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Feedback;
