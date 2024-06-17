document.addEventListener("DOMContentLoaded", () => {
    if (!isAuthorized()) {
        window.location.href = "login.html";
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        const athleteId = urlParams.get("id");
        if (athleteId) {
            fetchAthleteDetails(athleteId);
        } else {
            displayError("ID do atleta não fornecido");
        }
    }
});

function isAuthorized() {
    return localStorage.getItem("authorized") === "true";
}

function fetchAthleteDetails(id) {
    fetch(`https://botafogo-atletas.mange.li/2024-1/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => renderAthleteDetails(data))
        .catch(error => displayError(error.message));
}

function renderAthleteDetails(athlete) {
    const container = document.getElementById("details-container");
    container.innerHTML = `
        <h1>${athlete.name}</h1>
        <p>Posição: ${athlete.position}</p>
        <p>Idade: ${athlete.age}</p>
        <p>Nacionalidade: ${athlete.nationality}</p>
    `;
}

function displayError(message) {
    const container = document.getElementById("details-container");
    container.innerHTML = `<p style="color: red;">Erro: ${message}</p>`;
}
