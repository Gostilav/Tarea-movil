import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyBplr69UVqaFwmW0sOegvjHEBbl72wilvU",
    authDomain: "taller-49dd8.firebaseapp.com",
    projectId: "taller-49dd8",
    storageBucket: "taller-49dd8.appspot.com",
    messagingSenderId: "84011756521",
    appId: "1:84011756521:web:47e278618f145885c57978",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('btncreate').addEventListener('click', () => {
    const email = document.getElementById('edtuser').value;
    const password = document.getElementById('edtpsw').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Usuario creado correctamente');
        })
        .catch((error) => {
            alert('Error al crear el usuario: ' + error.message);
        });
});
