let titulo = document.getElementById("container");
titulo.style.backgroundColor = "#F3F3F3";

let cabecaContainer = document.querySelector("#header-container");
cabecaContainer.style.backgroundColor = "#40B06A";

let emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = "#FD9F84";

let h3Elements = document.querySelectorAll(".emergency-tasks h3");

for(let index=0;index<h3Elements.length;index+=1){
    h3Elements[index].style.backgroundColor="#AA78F3";
}

let elements = document.querySelectorAll(".no-emergency-tasks h3");
for(let index=0;index<elements.length;index+=1){
    elements[index].style.backgroundColor="#232525"
}

let emergencyNoTasks = document.querySelector(".no-emergency-tasks");
emergencyNoTasks.style.backgroundColor = "#F9DB5E";

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "#073533";

