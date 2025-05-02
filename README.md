## 🎙️ Собеседник — Платформа подготовки к собеседованиям с ИИ
<div align="center">
  <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="Next.js" />
  <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="Vapi" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="Firebase" />
</div>

## 📋 <a name="table">Содержание</a>

1. 🤖 [Введение](#introduction)
2. ⚙️ [Стек технологий](#tech-stack)
3. 🔋 [Функциональность](#features)
4. 🤸 [Как запустить?](#quick-start)
5. 🕸️ [Фрагменты (Code to Copy)](#snippets)

## <a name="introduction">🤖 Введение</a>

**Собеседник** — это веб-приложение, разработанное с использованием Next.js, Firebase, Tailwind CSS и голосовых агентов Vapi и Google Gemini. Проект предназначен для моделирования собеседований с искусственным интеллектом.

Платформа позволяет пользователям проходить голосовые собеседования с ИИ и получать мгновенную обратную связь по своим ответам. Интерфейс выполнен в современном и адаптивном стиле.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Стек технологий</a>

- **Next.js** — интерфейс и серверная логика  
- **Firebase** — аутентификация и база данных  
- **Tailwind CSS** — стилизация интерфейса  
- **Vapi AI** — голосовое взаимодействие  
- **shadcn/ui** — набор UI-компонентов  
- **Google Gemini** — генерация и анализ ответов  
- **Zod** — валидация данных  

## <a name="features">🔋 Функциональность</a>

👉 **Аутентификация**: Зарегистрируйтесь и войдите в систему, используя пароль / электронную почту, которые обрабатываются Firebase.

👉 **Создание собеседований**: Легко создавайте собеседования при приеме на работу с помощью голосовых помощников Vapi и Google Gemini.

👉 **Получите обратную связь от AI**: Пройдите собеседование с голосовым AI ассистеном и получите мгновенную обратную связь, основанную на вашем разговоре.

👉 **Современный пользовательский интерфейс**: Минималистичный и удобный интерфейс, созданный для максимального удобства работы.

👉 **Страница интервью**: Проходите интервью, управляемое искусственным интеллектом, с обратной связью в режиме реального времени.

👉 **Панель мониторинга**: Управляйте и отслеживайте все ваши интервью с помощью удобной навигации.

👉 **Отзывчивость**: Полностью адаптивный дизайн, который легко работает на всех устройствах.

и многое другое, включая архитектуру кода и возможность повторного использования.

## <a name="quick-start">🤸 Как запустить?</a>

Выполните следующие действия, чтобы настроить проект локально на вашем компьютере.

**Предварительные требования**

Убедитесь, что на вашем компьютере установлено следующее:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Диспетчер пакетов Node)

**Клонирование репозитория**

```bash
git clone https://github.com/milkyWRLD/University_diplom.git
cd University_diplom
```

**Установка**

Установите зависимости проекта с помощью npm:

```bash
npm install
```

**Настройка переменных среды**

Создайте новый файл с именем ".env.local" в корне вашего проекта и добавьте следующее содержимое:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Замените значения-заполнители на ваши фактические **[Firebase](https://firebase.google.com/)**, **[Vapi](https://vapi.ai/?utm_source=youtube&utm_medium=video&utm_campaign=jsmastery_recruitingpractice&utm_content=paid_partner&utm_term=recruitingpractice)** учетные данные.

**Запуск проекта**

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере, чтобы увидеть проект.

## <a name="snippets">🕸️ Фрагменты</a>

<details>
<summary><code>globals.css</code></summary>

```css
@import "tailwindcss";
@plugin "tailwindcss-animate";

/* 🌙 Кастомный вариант для тёмной темы */
@custom-variant dark (&:is(.dark *));

/* 🎨 Основные кастомные переменные темы */
@theme {
  --color-success-100: #49de50;
  --color-success-200: #42c748;
  --color-destructive-100: #f75353;
  --color-destructive-200: #c44141;

  --color-primary-100: #dddfff;
  --color-primary-200: #cac5fe;

  --color-light-100: #d6e0ff;
  --color-light-400: #6870a6;
  --color-light-600: #4f557d;
  --color-light-800: #24273a;

  --color-dark-100: #020408;
  --color-dark-200: #27282f;
  --color-dark-300: #242633;

  --font-manrope: "Manrope", sans-serif;

  --bg-pattern: url("/pattern.png");
}

/* 🌞 Светлая тема (по умолчанию) */
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

/* 🌚 Тёмная тема */
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: var(--light-100);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

/* ✨ Inline переменные для использования в Tailwind */
@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

/* 🔧 Базовые стили */
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  p {
    @apply text-light-100;
  }
  h2 {
    @apply text-3xl font-semibold;
  }
  h3 {
    @apply text-2xl font-semibold;
  }
  ul {
    @apply list-disc list-inside;
  }
  li {
    @apply text-light-100;
  }
}

/* 🧩 Компоненты интерфейса */
@layer components {
  .btn-call {
    @apply inline-block px-7 py-3 font-bold text-sm leading-5 text-white transition-colors duration-150 bg-success-100 border border-transparent rounded-full shadow-sm focus:outline-none focus:shadow-2xl active:bg-success-200 hover:bg-success-200 min-w-28 cursor-pointer items-center justify-center overflow-visible;

    .span {
      @apply bg-success-100 h-[85%] w-[65%];
    }
  }

  .btn-disconnect {
    @apply inline-block px-7 py-3 text-sm font-bold leading-5 text-white transition-colors duration-150 bg-destructive-100 border border-transparent rounded-full shadow-sm focus:outline-none focus:shadow-2xl active:bg-destructive-200 hover:bg-destructive-200 min-w-28;
  }

  .btn-upload {
    @apply flex min-h-14 w-full items-center justify-center gap-1.5 rounded-md;
  }
  .btn-primary {
    @apply w-fit !bg-primary-200 !text-dark-100 hover:!bg-primary-200/80 !rounded-full !font-bold px-5 cursor-pointer min-h-10;
  }
  .btn-secondary {
    @apply w-fit !bg-dark-200 !text-primary-200 hover:!bg-dark-200/80 !rounded-full !font-bold px-5 cursor-pointer min-h-10;
  }

  .btn-upload {
    @apply bg-dark-200 rounded-full min-h-12 px-5 cursor-pointer border border-input  overflow-hidden;
  }

  .card-border {
    @apply border-gradient p-0.5 rounded-2xl w-fit;
  }

  .card {
    @apply dark-gradient rounded-2xl min-h-full;
  }

  .form {
    @apply w-full;

    .label {
      @apply !text-light-100 !font-normal;
    }

    .input {
      @apply !bg-dark-200 !rounded-full !min-h-12 !px-5 placeholder:!text-light-100;
    }

    .btn {
      @apply !w-full !bg-primary-200 !text-dark-100 hover:!bg-primary-200/80 !rounded-full !min-h-10 !font-bold !px-5 cursor-pointer;
    }
  }

  .call-view {
    @apply flex sm:flex-row flex-col gap-10 items-center justify-between w-full;

    h3 {
      @apply text-center text-primary-100 mt-5;
    }

    .card-interviewer {
      @apply flex-center flex-col gap-2 p-7 h-[400px] blue-gradient-dark rounded-lg border-2 border-primary-200/50 flex-1 sm:basis-1/2 w-full;
    }

    .avatar {
      @apply z-10 flex items-center justify-center blue-gradient rounded-full size-[120px] relative;

      .animate-speak {
        @apply absolute inline-flex size-5/6 animate-ping rounded-full bg-primary-200 opacity-75;
      }
    }

    .card-border {
      @apply border-gradient p-0.5 rounded-2xl flex-1 sm:basis-1/2 w-full h-[400px] max-md:hidden;
    }

    .card-content {
      @apply flex flex-col gap-2 justify-center items-center p-7 dark-gradient rounded-2xl min-h-full;
    }
  }

  .transcript-border {
    @apply border-gradient p-0.5 rounded-2xl w-full;

    .transcript {
      @apply dark-gradient rounded-2xl  min-h-12 px-5 py-3 flex items-center justify-center;

      p {
        @apply text-lg text-center text-white;
      }
    }
  }

  .section-feedback {
    @apply flex flex-col gap-8 max-w-5xl mx-auto max-sm:px-4 text-lg leading-7;

    .buttons {
      @apply flex w-full justify-evenly gap-4 max-sm:flex-col max-sm:items-center;
    }
  }

  .auth-layout {
    @apply flex items-center justify-center mx-auto max-w-7xl min-h-screen max-sm:px-4 max-sm:py-8;
  }

  .root-layout {
    @apply flex mx-auto max-w-7xl flex-col gap-12 my-12 px-16 max-sm:px-4 max-sm:my-8;
  }

  .card-cta {
    @apply flex flex-row blue-gradient-dark rounded-3xl px-16 py-6 items-center justify-between max-sm:px-4;
  }

  .interviews-section {
    @apply flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch;
  }

  .interview-text {
    @apply text-lg text-center text-white;
  }

  .progress {
    @apply h-1.5 text-[5px] font-bold bg-primary-200 rounded-full flex-center;
  }

  .tech-tooltip {
    @apply absolute bottom-full mb-1 hidden group-hover:flex px-2 py-1 text-xs text-white bg-gray-700 rounded-md shadow-md;
  }

  .card-interview {
    @apply dark-gradient rounded-2xl min-h-full flex flex-col p-6 relative overflow-hidden gap-10 justify-between;

    .badge-text {
      @apply text-sm font-semibold capitalize;
    }
  }
}

/* 🔧 Кастомные утилиты */
@utility dark-gradient {
  @apply bg-gradient-to-b from-[#1A1C20] to-[#08090D];
}

@utility border-gradient {
  @apply bg-gradient-to-b from-[#4B4D4F] to-[#4B4D4F33];
}

@utility pattern {
  @apply bg-[url('/pattern.png')] bg-top bg-no-repeat;
}

@utility blue-gradient-dark {
  @apply bg-gradient-to-b from-[#171532] to-[#08090D];
}

@utility blue-gradient {
  @apply bg-gradient-to-l from-[#FFFFFF] to-[#CAC5FE];
}

@utility flex-center {
  @apply flex items-center justify-center;
}

/* 🎞 Анимации (частично) */
@utility animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

</details>

<details>
<summary><code>lib/utils.ts</code></summary>

```javascript
import { interviewCovers, mappings } from "@/constants"; // Константы: обложки и соответствия технологий
import { clsx, type ClassValue } from "clsx"; // Утилита для объединения классов
import { twMerge } from "tailwind-merge"; // Умное объединение tailwind-классов

// Объединяет классы с учётом Tailwind-приоритетов
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"; // Базовый путь к иконкам технологий

// Преобразует имя технологии в ключ для поиска в объекте mappings
const normalizeTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  return mappings[key as keyof typeof mappings];
};

// Проверяет, существует ли иконка по данному URL
const checkIconExists = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok; // true, если иконка найдена
  } catch {
    return false;
  }
};

// Возвращает список объектов { tech, url } для заданного массива технологий
export const getTechLogos = async (techArray: string[]) => {
  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);
    return {
      tech,
      url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`,
    };
  });

  // Проверка существования иконок, подставляем запасную, если не найдена
  const results = await Promise.all(
    logoURLs.map(async ({ tech, url }) => ({
      tech,
      url: (await checkIconExists(url)) ? url : "/tech.svg",
    }))
  );

  return results;
};

// Возвращает случайную обложку из списка interviewCovers
export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};

```

</details>

<details>
<summary><code>Запрос на создание вопросов (/app/api/vapi/generate/route.tsx):</code></summary>

```javascript
`Составь вопросы для собеседования на вакансию.
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
```

</details>

<details>
<summary><code>Генерация запроса обратной связи (lib/actions/general.action.ts):</code></summary>

```javascript
prompt: `
        Ты — AI-интервьюер, анализирующий пробное собеседование. 
        Твоя задача — оценить кандидата по заданным категориям. 
        Будь внимательным и подробным в своем анализе. Не будь снисходительным: 
        если есть ошибки или зоны для улучшения, обязательно укажи их.
        
        Транскрипт:
        ${formattedTranscript}

        Пожалуйста, оцени кандидата по шкале от 0 до 100 в следующих категориях. 
        Не добавляй других категорий:
        - **Навыки коммуникации**: Ясность речи, структурированность ответов.
        - **Технические знания**: Понимание ключевых концепций, связанных с ролью.
        - **Решение проблем**: Умение анализировать задачи и предлагать решения.
        - **Культурное соответствие и соответствие роли**: Насколько кандидат соответствует ценностям компании и требованиям роли.
        - **Уверенность и ясность**: Уверенность в ответах, вовлеченность в беседу и понятность высказываний.
        `,
      system:
        "Ты профессиональный интервьюер, анализирующий пробное собеседование. Твоя задача — объективно и структурированно оценить кандидата.",
```

</details>

<details>
<summary><code>Отображение обратной связи (app/(root)/interview/[id]/feedback/page.tsx):</code></summary>

```javascript
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
              Вернуться на главную
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Пройти собеседование заново
            </p>
          </Link>
        </Button>
      </div>
    </section>
```

</details>

<details>
<summary><code>Фиктивные интервью:</code></summary>

```javascript
export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Разработчик",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["Что такое React?"],
    finalized: false,
    createdAt: "2025-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Разработчик",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["Что такое Node.js?"],
    finalized: false,
    createdAt: "2025-03-14T15:30:00Z",
  },
];
```

</details>