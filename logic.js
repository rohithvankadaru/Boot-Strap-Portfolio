
let allBtn = document.querySelector("#All-btn");
let frontendBtn = document.querySelector("#Frontend-btn");
let backendBtn = document.querySelector("#Backend-btn");

let frontendComponents = document.querySelectorAll(".Frontend");
let backendComponents = document.querySelectorAll(".Backend");


allBtn.addEventListener("click", () => {
    backendComponents.forEach(element => {
        element.style.display = "flex";
    });
    frontendComponents.forEach(element => {
        element.style.display = "flex";
    });
});

frontendBtn.addEventListener("click", () => {
    backendComponents.forEach(element => {
        element.style.display = "none";
    });
    frontendComponents.forEach(element => {
        element.style.display = "flex";
    });
});

backendBtn.addEventListener("click", () => {
    frontendComponents.forEach(element => {
        element.style.display = "none";
    });
    backendComponents.forEach(element => {
        element.style.display = "flex";
    });
});

////////////////////////////////////////////////////////////////////////////////
let submit = document.getElementById("submit");
let Name = document.getElementById("Name");
let phNumber = document.getElementById("Phone Number");
let eMail = document.getElementById("E-mail");
let message = document.getElementById("message");


submit.addEventListener("click", sendMail);

const data = {
    Name,
    phNumber,
    eMail,
    message
}

async function sendMail(event) {
    event.preventDefault();
    try {
        await axios.post()
    }
    catch (error) { }
}

