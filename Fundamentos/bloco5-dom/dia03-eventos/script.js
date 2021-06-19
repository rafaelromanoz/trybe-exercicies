function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

function createDaysOfCalendar() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const diasDoCalendario = document.querySelector("#days");

  for (let index2 = 0; index2 < dezDaysList.length; index2 += 1) {
    const daysOf = dezDaysList[index2];
    const daysOfWeek = document.createElement("li");
    daysOfWeek.innerHTML = daysOf;
    diasDoCalendario.appendChild(daysOfWeek);
    daysOfWeek.classList.add("day");
    if (
      dezDaysList[index2] === 24 ||
      dezDaysList[index2] === 25 ||
      dezDaysList[index2] === 31
    ) {
      daysOfWeek.classList.add("holiday");
    }
    if (
      dezDaysList[index2] === 4 ||
      dezDaysList[index2] === 11 ||
      dezDaysList[index2] === 18 ||
      dezDaysList[index2] === 25
    ) {
      daysOfWeek.classList.add("friday");
    }
  }
}
createDaysOfCalendar();

//criando botão do feriado
function createButton() {
  const button = document.querySelector(".buttons-container");
  const buttonAdd = document.createElement("button");
  buttonAdd.innerHTML = "Feriados";
  buttonAdd.id = "btn-holiday";
  button.appendChild(buttonAdd);
}

createButton();
// fazendo exercicio 5 de colocar fundo nos feriados
const holidayButtonClick = document.querySelector("#btn-holiday");

let clickHoliday = false;

holidayButtonClick.addEventListener("click", function () {
  const li = document.getElementsByClassName("holiday");

  if (clickHoliday == false) {
    for (let index = 0; index < li.length; index += 1) {
      li[index].style.backgroundColor = "red";
    }
    clickHoliday = true;
    return void 0;
  }
  if (clickHoliday == true) {
    for (let index = 0; index < li.length; index += 1) {
      li[index].style.backgroundColor = "rgb(238,238,238)";
    }
    clickHoliday = false;
  }
});
// criando botão sexta feira
function dayFriday() {
  const button = document.querySelector(".buttons-container");
  const buttonAdd2 = document.createElement("button");
  buttonAdd2.innerHTML = "Sexta-Feira";
  buttonAdd2.id = "btn-friday";
  button.appendChild(buttonAdd2);
}
dayFriday();

// exercicio 6 alterando friday
const fridayButtonClick = document.querySelector("#btn-friday");

fridayButtonClick.addEventListener("click", function () {
  const li = document.getElementsByClassName("friday");

  if (clickHoliday == false) {
    for (let index = 0; index < li.length; index += 1) {
      li[index].innerText = "SEXTOU!";
    }
    clickHoliday = true;
    return void 0;
  }
  if (clickHoliday == true) {
    li[0].innerText = "4";
    li[1].innerText = "11";
    li[2].innerText = "18";
    li[3].innerText = "25";
  }
  clickHoliday = false;
});
// exercicio 6 zoom nas letras

let dias = document.getElementById("days");

dias.addEventListener("mouseover", function (event) {
  event.target.style.fontSize = "26px";
});
dias.addEventListener("mouseout", function (event) {
  event.target.style.fontSize = "18px";
});

/* Exercicio 7 Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .*/

function addTask() {
  let tasks = document.querySelector(".my-tasks");
  const spanTask = document.createElement("span");
  spanTask.innerText = "Cozinhar:";
  spanTask.className = "my-tasks";
  tasks.appendChild(spanTask);
}

addTask();
//exercicio 8 criando a div
function addDiv() {
  let colorTasks = document.querySelector(".my-tasks");
  const divTask = document.createElement("div");
  divTask.style.backgroundColor = "green";
  divTask.className = "task";
  colorTasks.appendChild(divTask);
}
addDiv();

//exercicio 9 fazendo função de adicionar e remover classe selected clicando;

function setTaskClass() {
  let selectedColor = document.getElementsByClassName('color selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();


//exercicio 10 marcando li

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

/*Bônus:
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: keyCode . */

const input=document.querySelector('#task-input');

const buttonAdd=document.getElementById('btn-add');

const taskUl=document.querySelector('.task-list');

function verificaCaractere(event){
  if(input.value===''){

    return alert("Não tem nada escrito!");
  }
  input.addEventListener()
   const valor=input.value;
   const li=document.createElement('li');
   li.innerText="Novo compromisso : "+valor;
   taskUl.appendChild(li)
  
}

buttonAdd.addEventListener("click",verificaCaractere);







