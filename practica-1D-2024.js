document.addEventListener('DOMContentLoaded', () => {
    const correctoName = 'limber';
    const correctoContraseña = 'limber1234';
    const maxIntentos = 3;
    let intentos = 0;

    const form = document.getElementById('loginForm1')
    const nameInput = document.getElementById("name1")
    const contraseñaInput = document.getElementById("password1")
    const mensajeParagrap = document.getElementById("message1")

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const enterdName = nameInput.value;
        const enterdContraseña = contraseñaInput.value;

        if (enterdName === correctoName &&  enterdContraseña === correctoContraseña) {
            window.location.href = 'limber-huaycho.html';
        }
        else {
            intentos++;
            if (intentos >= maxIntentos) {
                mensajeParagrap.textContent = 'la cuenta no existe, por motivos de seguridad carge nuevamente la paguina'
                mensajeParagrap.style.color = 'red';
                form.querySelector("button").disabled = true;
            }
            else {
                mensajeParagrap.textContent = `la cuenta no se encontro. Intentos: ${maxIntentos - intentos}`;
                mensajeParagrap.style.color = 'red';
            }
        }
        nameInput.value = '';
        contraseñaInput.value = '';
    });
});
