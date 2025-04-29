// Импортируем функции, необходимые для инициализации Firebase-приложения
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Добавьте SDK для других продуктов Firebase, которые хотите использовать
// Документация: https://firebase.google.com/docs/web/setup#available-libraries

// Конфигурация вашего веб-приложения Firebase
// Для SDK версии 7.20.0 и выше measurementId — необязательный параметр
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Инициализируем Firebase-приложение, если оно ещё не было создано
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app); // Аналитика отключена (можно включить при необходимости)

export const auth = getAuth(app); // Экспортируем объект аутентификации Firebase
export const db = getFirestore(app); // Экспортируем объект базы данных Firestore
