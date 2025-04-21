import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Инициализируем Firebase Admin SDK
function initFirebaseAdmin() {
  // Получаем список уже инициализированных приложений Firebase
  const apps = getApps();

  // Если ни одно приложение ещё не инициализировано — инициализируем его
  if (!apps.length) {
    initializeApp({
      // Передаём объект credentials с использованием переменных окружения
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID, // ID проекта в Firebase
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL, // Email сервисного аккаунта
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // Закрытый ключ, с заменой экранированных \n на реальные переводы строк
      }),
    });
  }

  return {
    auth: getAuth(), // Получаем экземпляр аутентификации Firebase
    db: getFirestore(), // Получаем экземпляр базы данных Firestore
  };
}

// Экспортируем auth и db, чтобы использовать их в других частях приложения
export const { auth, db } = initFirebaseAdmin();