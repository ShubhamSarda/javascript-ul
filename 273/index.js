import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDzVTbftsmVd7CIXSP0NCz8pPMWB_Wujjk",
    authDomain: "bookmark-ef22c.firebaseapp.com",
    projectId: "bookmark-ef22c",
    storageBucket: "bookmark-ef22c.appspot.com",
    messagingSenderId: "351258517988",
    appId: "1:351258517988:web:f6feb6ef952b0f30f127f1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "bookmarks");

const addForm = document.querySelector(".add");
addForm.addEventListener("submit", event => {
    event.preventDefault();

    addDoc(colRef, {
        link: addForm.link.value,
        title: addForm.title.value,
        category: addForm.category.value,
        createdAt: serverTimestamp()
    })
    .then(() => {
        addForm.reset();
    })
});