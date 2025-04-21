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
  apiKey: "AIzaSyAMriTFQuGEHbhpSTbB0CRSkbW3jP3H4bg", // Ключ API вашего проекта
  authDomain: "sobesednik-591c5.firebaseapp.com", // Домен для авторизации
  projectId: "sobesednik-591c5", // ID проекта
  storageBucket: "sobesednik-591c5.firebasestorage.app", // Хранилище файлов (bucket)
  messagingSenderId: "1083206102974", // ID отправителя сообщений
  appId: "1:1083206102974:web:3bf202f825aa01cbeb13ef", // Идентификатор приложения
  measurementId: "G-64LNZB8QVZ" // Идентификатор для аналитики (необязателен)
};

// Инициализируем Firebase-приложение, если оно ещё не было создано
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app); // Аналитика отключена (можно включить при необходимости)

export const auth = getAuth(app); // Экспортируем объект аутентификации Firebase
export const db = getFirestore(app); // Экспортируем объект базы данных Firestore
