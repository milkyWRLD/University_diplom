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
