import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

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


function deleteEvent(){
    const deleteButtons = document.querySelectorAll("i.delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", event => {
            const deleteRef = doc(db, "bookmarks", button.dataset.id);
            deleteDoc(deleteRef)
                .then(() => {
                    button.parentElement.parentElement.parentElement.remove();
                })
        })
    });
}


function generateTemplate(response, id){
    return `<div class="card">
                <p class="title">${response.title}</p>
                <div class="sub-information">
                    <p>
                        <span class="category ${response.category}">${response.category[0].toUpperCase()}${response.category.slice(1)}</span>
                    </p>
                    <a href="${response.link}" target="_blank"><i class="bi bi-box-arrow-up-right website"></i></a>
                    <a href="https://www.google.com/search?q=${response.title}" target="_blank"><i class="bi bi-google search"></i></a>
                    <span><i class="bi bi-trash delete" data-id="${id}"></i></span>
                </div>
            </div>`;
}


const cards = document.querySelector(".cards");
function showCard(){
    cards.innerHTML = "";
    getDocs(colRef)
    .then(data => {
        data.docs.forEach(document => {
            cards.innerHTML += generateTemplate(document.data(), document.id);
        });
        deleteEvent();
    })
    .catch(error => {
        console.log(error);
    });
}
showCard();


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
        showCard();
    })
});