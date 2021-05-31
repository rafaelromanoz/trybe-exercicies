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
    } else if (
      dezDaysList[index2] === 4 ||
      dezDaysList[index2] === 11 ||
      dezDaysList[index2] === 18 ||
      dezDaysList[index2] === 25
    ) {
      daysOfWeek.classList.add("friday");
    }
  }
}
const button = document.querySelector(".buttons-container");

function createButton(Feriados) {
  const buttonAdd = document.createElement("button");
  buttonAdd.innerText = "Feriados";
  button.appendChild(buttonAdd);
  buttonAdd.id = "btn-holiday";
}

function backgroundBtt() {
  let alteraCor = document.querySelectorAll(".holiday");

  for (let key in alteraCor) alteraCor[key].style.backgroundColor = "red";
}

function dayFriday() {
  const buttonAdd2 = document.createElement("button");
  buttonAdd2.innerText = "Sexta-Feira";
  button.appendChild(buttonAdd2);
  buttonAdd2.className = "btn-friday";
}

function back
button.addEventListener("click", backgroundBtt);

dayFriday();

createButton();

createDaysOfCalendar();
