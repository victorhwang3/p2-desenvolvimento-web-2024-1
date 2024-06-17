document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value;
    const hash = sha256(password);
    const validHash = "ef92b778bafe771e89245b89ecbc88b3c2d009f6bcfc768e09cdbc55d991a6e0"; // hash da senha "senha123"
    if (hash === validHash) {
        localStorage.setItem("authorized", "true");
        window.location.href = "index.html";
    } else {
        alert("Senha incorreta");
    }
});
