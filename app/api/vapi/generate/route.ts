import { generateText } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Составь вопросы для собеседования на вакансию.
        Должность: ${role}.
        Уровень опыта: ${level}.
        Технологии, которые используются: ${techstack}.
        Фокус вопросов — преимущественно ${type} (технические или поведенческие).
        Количество вопросов: ${amount}.

        Пожалуйста, верни только список вопросов — без вступлений, пояснений или другого текста.

        Вопросы будут озвучены голосовым ассистентом — не используй символы вроде "/" или "*" и другие специальные символы, которые могут нарушить озвучивание.

        Формат вывода:
        ["Вопрос 1", "Вопрос 2", "Вопрос 3"]

        Спасибо! <3
    `,
    });

    const interview = {
      role, type, level,
      techstack: techstack.split(","),
      questions: JSON.parse(questions),
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: interview}, { status: 200 });
  } catch(error) {
    console.error(error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Спасибо!" }, { status: 200 });
}