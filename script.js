document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Lógica de validação simples
    if (username === 'admin' && password === 'admin') {
        messageElement.textContent = 'Login bem-sucedido! Redirecionando...';
        messageElement.style.color = 'green';
        window.location.href = '/dashboard';
    } else {
        messageElement.textContent = 'Usuário ou senha inválidos.';
        messageElement.style.color = 'red';
    }
});