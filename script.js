// 'H' Tuşu ile Formları Gizleme/Gösterme
document.addEventListener('keydown', function(event) {
    if (event.key === 'H' || event.key === 'h') {
        const forms = document.querySelectorAll('input, button');
        forms.forEach(form => {
            if (form.style.display === 'none') {
                form.style.display = '';
            } else {
                form.style.display = 'none';
            }
        });
    }
});

// Login butonuna tıklanınca kullanıcı adı ve şifreyi bir diziye ekle
const loginButton = document.querySelector('button');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

let loginAttempts = [];

loginButton.addEventListener('click', function() {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Eğer kullanıcı adı ve şifre boş değilse, bunları diziye ekle
    if (username && password) {
        loginAttempts.push({ username: username, password: password });
        console.log("Girişler:", loginAttempts);

        // Kullanıcı adı ve şifreyi sıfırlama
        usernameInput.value = '';
        passwordInput.value = '';
    } else {
        console.log("Lütfen kullanıcı adı ve şifre girin!");
    }
});
