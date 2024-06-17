document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value;
    const hash = sha256(password);
    const validHash = "55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251"; // hash da senha "senha123"
    if (hash === validHash) {
        localStorage.setItem("authorized", "true");
        window.location.href = "index.html";
    } else {
        alert("Senha incorreta");
    }
});
