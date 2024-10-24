import { Setregister,Getregister } from "../conection.js";

const tomar = document.getElementById('btnsave');
const buscar = document.getElementById('btnbuscar');

async function guardar() {
    const cod = document.getElementById('edtcod').value;
    const nombre = document.getElementById('edtname').value;
    const país = document.getElementById('edtpais').value;

    if (!cod || !nombre || !país) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    try {
        const verificar = await Setregister(cod, nombre, país);
        alert('Registro exitoso');
        window.location.href = 'regcity.html';
    } catch (error) {
        console.error('Error al registrar:', error);
        if (error.message.includes('already exists')) {
            alert('El código ya está registrado.');
        } else {
            alert('Error al registrar. Inténtalo de nuevo.');
        }
    }
}

async function Ver() {
    const cod = document.getElementById('edtcod').value;

    try {
        const esperar = Getregister(cod);
        const docSnap = await esperar;

        if (docSnap.exists()) {
            let Html = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${docSnap.data().name}</h5>
                        <p class="card-text">${docSnap.data().codigo}</p>
                        <p class="card-text">${docSnap.data().country}</p>
                        <a href="#" class="btn btn-primary">Delete</a>
                        <a href="#" class="btn btn-primary">Update</a>
                    </div>
                </div>
            `;
            document.getElementById('cont').innerHTML = Html;
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error('Error', error);
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    tomar.addEventListener('click', guardar);
    buscar.addEventListener('click', Ver);
});
