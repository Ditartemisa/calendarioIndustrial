
//Part 1
let buttonHour = document.getElementById("btnSubmitHour");
let buttonDay = document.getElementById("btnSubmitDay");
let alert1Element = document.getElementById("alertResultadoHour");
let alert2Element = document.getElementById("alertResultadoDay");

function businessHours(dayNumber, hourNumber) {
    // Horario laboral de 9 AM a 5 PM, de lunes a viernes (días 1 a 5)
    if (hourNumber >= 9 && hourNumber <= 18 && dayNumber >= 1 && dayNumber <= 5) {
        return true;
    } else {
        return false;
    }
}

buttonHour.addEventListener("click", function() {
    let hourInput = document.getElementById("txtHour");
    let hourNumber = parseInt(hourInput.value);

    // Hora laboral-no laboral
    let dayNumber = 3;

    let result = businessHours(dayNumber, hourNumber);

    if (result) {
        alert1Element.textContent = "¡Es hora laboral!";
        alert1Element.classList.remove("alert-danger");
        alert1Element.classList.add("alert-success");
    } else {
        alert1Element.textContent = "No es hora laboral.";
        alert1Element.classList.remove("alert-success");
        alert1Element.classList.add("alert-danger");
    }
});

buttonDay.addEventListener("click", function() {
    let dayInput = document.getElementById("txtDay");
    let dayNumber = parseInt(dayInput.value);

    //Día laboral-np laboral
    let hourNumber = 14;

    let result = businessHours(dayNumber, hourNumber);

    if (result) {
        alert2Element.textContent = "¡Es día laboral!";
        alert2Element.classList.remove("alert-danger");
        alert2Element.classList.add("alert-success");
    } else {
        alert2Element.textContent = "No es día laboral.";
        alert2Element.classList.remove("alert-success");
        alert2Element.classList.add("alert-danger");
    }
});


//Part 2

// ... (código existente) ...

let buttonPart2 = document.getElementById("btnSubmitPart2");
let alertPart2Element = document.getElementById("alertResultadoPart2");

function getDayNumber(janFirstDayNumber, yearDayNumber) {
  const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  let dayNumber = (janFirstDayNumber + yearDayNumber) % 7;
  return daysOfWeek[dayNumber];
}

buttonPart2.addEventListener("click", function() {
  let janFirstDayNumberInput = document.getElementById("janFirstDay");
  let janFirstDayNumber = parseInt(janFirstDayNumberInput.value);

  let yearDayNumberInput = document.getElementById("yearDay");
  let yearDayNumber = parseInt(yearDayNumberInput.value);

  let result = getDayNumber(janFirstDayNumber, yearDayNumber);

  alertPart2Element.textContent = "El día de la semana es: " + result;
});

//Part 3

let buttonPart3 = document.getElementById("btnSubmitPart3");
let alertPart3Element = document.getElementById("alertResultadoPart3");

function isBusinessHours(dayNumber, hour) {
  const date = new Date();
  date.setFullYear(2024); // Se establece año
  date.setMonth(0); // Se esablece mes enero (enero es 0)
  date.setDate(dayNumber); // Se establece día (comienza en 1)
  date.setHours(hour);

  const dayOfWeek = date.getDay(); // 0 es domingo, 1 es lunes, ..., 6 es sábado

  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
  const isBusinessHour = hour >= 9 && hour <= 18;

  return isWeekday && isBusinessHour;
}

buttonPart3.addEventListener("click", function() {
  let dayNumberInput = document.getElementById("dayNumber");
  let dayNumber = parseInt(dayNumberInput.value);

  let hourInput = document.getElementById("hour");
  let hour = parseInt(hourInput.value);

  let result = isBusinessHours(dayNumber, hour);

  alertPart3Element.textContent = "¿Es horario laboral? " + result;
});







