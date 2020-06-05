var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var tabletDates = document.querySelector(".calendarDates");
var eventsBlue = document.querySelector(".calendarEventsDataScience");
var eventsRed = document.querySelector(".calendarMarketing");

var months = [
  "Јануари",
  "Фебруари",
  "Март",
  "Април",
  "Мај",
  "Јуни",
  "Јули",
  "Август",
  "Септември",
  "Окромври",
  "Ноември",
  "Декември",
];

let monthAndYear = document.getElementById("monthAndYear");
const eventsData = [
  {
    date: new Date(2020, 3, 5),
    title: "Deep dive into Data Science",
    time: "10:00 - 18:00",
    day: "Ден 1",
    bgColor: "blue",
    color: "white",
  },
  {
    date: new Date(2020, 3, 6),
    title: "Deep dive into Data Science",
    time: "10:00 - 18:00",
    day: "Ден 3",
    bgColor: "blue",
    color: "white",
  },
  {
    date: new Date(2020, 3, 26),
    title: "Deep dive into Marketing",
    time: "10:00 - 18:00",
    day: "Ден 1",
    bgColor: "red",
    color: "white",
  },
  {
    date: new Date(2020, 3, 27),
    title: "Deep dive into Marketing",
    time: "10:00 - 18:00",
    day: "Ден 3",
    bgColor: "red",
    color: "white",
  },
];

showCalendar(currentMonth, currentYear, eventsData);

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear, eventsData);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear, eventsData);
}

function showCalendar(month, year, events) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = document.getElementById("calendar-body");

  tbl.innerHTML = "";

  monthAndYear.innerHTML = months[month] + " " + year;

  var thisYearAndMonthEvents = events.filter(function (event) {
    return event.date.getFullYear() == year && event.date.getMonth() == month;
  });

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);

        if (cell.textContent == "") {
          cell.style.backgroundColor = "white";
        }
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("td");
        let eventDiv = document.createElement("div");
        eventDiv.classList.add("eventDiv-css");
        let cellText = document.createTextNode(date);
        cell.appendChild(eventDiv);
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;

        if (thisYearAndMonthEvents.length) {
          var todayEvent = thisYearAndMonthEvents.filter(function (event) {
            return event.date.getDate() == date;
          });

          if (todayEvent.length) {
            todayEvent.forEach(function (element) {
              var date = element.date.getDate() - 1;
              var month = element.date.getMonth() + 1;
              var year = element.date.getFullYear();
              eventDiv.innerHTML = "<p>"
                .concat(element.title, "</p><h6>")
                .concat(element.time, "</h6><h6>")
                .concat(element.day, "</h6>");
              cell.style.backgroundColor = element.bgColor;
              cell.style.color = element.color;
              if (element.bgColor.indexOf("blue") > -1) {
                eventsBlue.innerHTML = "<p>0"
                  .concat(date - 1, "/0")
                  .concat(date, ".0")
                  .concat(month, ".")
                  .concat(year, "</p><p>")
                  .concat(element.title, "</p><h6>")
                  .concat(element.time, " \u0447</h6>");
              } else {
                eventsRed.innerHTML = "<p>"
                  .concat(date - 1, "/")
                  .concat(date, ".0")
                  .concat(month, ".")
                  .concat(year, "</p><p>")
                  .concat(element.title, "</p><h6>")
                  .concat(element.time, " \u0447</h6>");
              }
            });
          }
        }
      }
    }

    tbl.appendChild(row);
  }
}
