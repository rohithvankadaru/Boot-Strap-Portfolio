let developerText = document.querySelector("#Developer-text");

setInterval(changeText, 3000);

function changeText() {
    if(developerText.textContent == "Frontend Developer"){
        developerText.innerHTML = "Backend Developer";
    }
    else{
        developerText.innerHTML = "Frontend Developer"
    }
}


let allBtn = document.querySelector("#All");
let frontendBtn = document.querySelector("#Frontend");
let backendBtn = document.querySelector("#Backend");

let allComponents = document.querySelectorAll(".All");
let frontendComponents = document.querySelectorAll(".Frontend");
let backendComponents = document.querySelectorAll(".Backend");


allBtn.addEventListener("click", ()=>{
    allComponents.forEach(element => {
        element.style.display = "flex";
    });
    backendComponents.forEach(element => {
        element.style.display = "flex";
    });
    frontendComponents.forEach(element => {
        element.style.display = "flex";
    });
});

frontendBtn.addEventListener("click", ()=>{
    allComponents.forEach(element => {
        element.style.display = "none";
    });
    backendComponents.forEach(element => {
        element.style.display = "none";
    });
    frontendComponents.forEach(element => {
        element.style.display = "flex";
    });
});

backendBtn.addEventListener("click", ()=>{
    allComponents.forEach(element => {
        element.style.display = "none";
    });
    frontendComponents.forEach(element => {
        element.style.display = "none";
    });
    backendComponents.forEach(element => {
        element.style.display = "flex";
    });
});


let submit = document.getElementById("submit");
let Name = document.getElementById("Name");
let phNumber = document.getElementById("Phone Number");
let EMail = document.getElementById("E-mail");
let message = document.getElementById("message");


submit.addEventListener("click", () =>{
})