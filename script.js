// Kullanıcı girişlerini saklamak için dizi
let loginData = [];

// Login butonuna tıklanınca kullanıcı girişlerini kaydet
document.getElementById("loginButton").addEventListener("click", function () {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username && password) {
        loginData.push({ username: username, password: password });
        console.log("Girişler:", loginData);
    } else {
        console.log("Lütfen kullanıcı adı ve şifre girin!");
    }
});

// Canlı saat fonksiyonu
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

// Saat her saniye güncellensin
setInterval(updateClock, 1000);
updateClock(); // Sayfa açıldığında hemen göster

// 'H' tuşuna basıldığında formu gizle/göster
document.addEventListener("keydown", function (event) {
    if (event.key && typeof event.key === "string") {
        let keyPressed = event.key.toLowerCase(); // Hata almamak için key kontrolü
        if (keyPressed === "h") {
            let form = document.getElementById("loginForm");
            form.style.display = (form.style.display === "none") ? "block" : "none";
        }
    }
});
