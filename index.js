document.addEventListener("DOMContentLoaded", function() {
    function validarLogin(event) {
        event.preventDefault();

        // E-mail    
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const senhaInput = document.getElementById('senha');
        const senhaError = document.getElementById('senhaError');
        const senha = senhaInput.value;

        let valido = true;

        // validação do e-mail
        if (!emailRegex.test(email)) {
            alert('email invalido');
            emailInput.focus();
            valido = false;
        } else {
            emailError.textContent = '';
        }

        // validação da senha
        if (senha.length < 6) {
            alert('a senha deve ter pelo menos 6 caracteres');
            if (valido) senhaInput.focus();
            valido = false;
        } else {
            senhaError.textContent = '';
        }

        if (valido) {
            window.location.href = 'mainpage.html';
        }
    }

    document.getElementById("loginForm").addEventListener("submit", validarLogin);
});