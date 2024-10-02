// Funciones de autenticación
function registerUser() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    if (!username || !password) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const user = { username, password };
    localStorage.setItem(username, JSON.stringify(user));
    alert("Usuario registrado con éxito.");
    toggleForms();
}

function loginUser() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password) {
        alert("Inicio de sesión exitoso.");
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('name-generator').style.display = 'block';
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }
}

// Función para alternar formularios
function toggleForms() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const toggleButton = document.getElementById('toggle-form');

    if (registerForm.style.display === 'none') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
        toggleButton.innerText = "¿Tienes cuenta? Iniciar sesión";
    } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        toggleButton.innerText = "¿No tienes cuenta? Registrarse";
    }
}

// Event Listeners
document.getElementById('register').addEventListener('click', registerUser);
document.getElementById('login').addEventListener('click', loginUser);
document.getElementById('toggle-form').addEventListener('click', toggleForms);

// Código de generación de nombres aquí (puedes incluir tu código existente)
