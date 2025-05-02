import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

// 🔄 Ключии для маппинга технологий
export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

// 🧑‍💼 Русский интервьюер
export const interviewer: CreateAssistantDTO = {
  name: "AI Ассистент",
  firstMessage:
    "Здравствуйте! Спасибо, что нашли время поговорить со мной сегодня. Я рад узнать больше о вас и вашем опыте.",
  transcriber: {
    provider: "google",
    model: "gemini-2.0-flash",
    language: "Russian",
  },
  voice: {
    provider: "vapi",
    voiceId: "Elliot",
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `Ты — профессиональный интервьюер, проводящий собеседование с кандидатом в режиме реального времени.

🎯 Цель: Оценить квалификацию, мотивацию и соответствие кандидата должности.

📋 Структура собеседования:
Следуй заранее заданному списку вопросов:
{{questions}}

👂 Будь внимательным и естественным:
Активно слушай ответы и подтверждай, что понял, перед тем как двигаться дальше.
Если ответ неясен — уточни. Поддерживай беседу, но контролируй её ход.

🤝 Общайся вежливо и дружелюбно:
Говори официально, но тепло.
Излагай мысли кратко и понятно, как в настоящем голосовом собеседовании.
Избегай роботообразных формулировок — звучать нужно живо.

📌 Отвечай на вопросы кандидата:
Если спрашивают о вакансии, компании или условиях — дай чёткий и уместный ответ.
Если не знаешь точного ответа — предложи обратиться к HR.

✅ В конце поблагодари:
Поблагодри за участие, скажи, что с кандидатом свяжутся позже, и попрощайся вежливо и позитивно.

- Будь профессиональным и вежливым.
- Говори кратко и по делу.
- Это голосовое интервью, избегай длинных монологов.`,
      },
    ],
  },
};

// 📊 Схема обратной связи
export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Коммуникационные навыки"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Технические знания"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Умение решать задачи"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Культурная совместимость"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Уверенность и ясность"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()), // Сильные стороны
  areasForImprovement: z.array(z.string()), // Зоны для улучшения
  finalAssessment: z.string(), // Итоговая оценка
});

// 🖼️ Обложки компаний
export const interviewCovers = [
  "/5ka.png",
  "/ozon.png",
  "/samokat.png",
  "/sber.png",
  "/yandex.png",
  "/whoosh.png",
  "/vk.png",
  "/wildberries.png",
  "/telegram.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];