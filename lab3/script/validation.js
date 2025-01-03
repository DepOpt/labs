document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Отримуємо значення полів форми
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Валідація імені: має містити хоча б 3 символи
    if (username.length < 3) {
        alert("Ім'я повинно містити щонайменше 3 символи.");
        event.preventDefault();
        return;
    }
    // Валідація пароля: має бути щонайменше 8 символів
    if (password.length < 8) {
        alert("Пароль повинен містити щонайменше 8 символів.");
        event.preventDefault();
        return;
    }
});