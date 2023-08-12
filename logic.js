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