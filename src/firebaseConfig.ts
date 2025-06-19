// src/firebaseConfig.ts

// 1. As importações dos serviços que precisamos
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 2. A SUA configuração que você copiou do Firebase (corretíssima!)
const firebaseConfig = {
  apiKey: "AIzaSyBswjOMnwbkEYjoo4pGiwd9C0RxOGEMUGw",
  authDomain: "desafio-tecnico-58e4d.firebaseapp.com",
  projectId: "desafio-tecnico-58e4d",
  storageBucket: "desafio-tecnico-58e4d.appspot.com", // Atenção aqui, geralmente termina com .appspot.com
  messagingSenderId: "757870502720",
  appId: "1:757870502720:web:d40b8e544d0ca43c63d0a5"
};

// 3. Inicializa o Firebase e exporta os "atalhos" para os serviços
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);       // Atalho para o banco de dados (Firestore)
export const storage = getStorage(app);    // Atalho para o armazenamento de arquivos (Storage)