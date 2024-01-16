const currentDate = document.querySelector(".current-date"), 
daysTag = document.querySelector(".days"), 
prevNextIcon = document.querySelectorAll(".calendar-icons img"),
scrolling = document.querySelector(".calendar"), 
showTime = $("#time"),
showDate = $("#date-now"),
calendarDays = $(".days");
 
//getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); //getting first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); //getting last day of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();//getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { //creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { //creating li of current month
        let isToday = i === date.getDate() && currMonth == new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let index = lastDayofMonth; index < 6; index++) { //creating li of next month first days
        liTag += `<li class="inactive">${index - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${month[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

calendarDays.on("animationend", () => {
    calendarDays.removeClass("slideup slidedown");
});

function scrollDown() {
    calendarDays.addClass("slidedown");
    
}
function scrollUp() {
    calendarDays.addClass("slideup");
}



prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => { 
        if (icon.id === "prev") {
            scrollUp();
            currMonth -= 1;
          } else if (icon.id === "next") {
            scrollDown();
            currMonth += 1;
          }
      
       if(currMonth < 0 || currMonth > 11) {//if currMonth is less than 0 or greater than 11
        //Creating a new date of current year & month and pass is as date value
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear(); //updating current year with new date year
        currMonth = date.getMonth(); //updating current month with new month
       } else { //else pass new Date as date value
        date = new Date();
       }
       renderCalendar();
    });
});

scrolling.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        scrollDown();
        currMonth += 1;
    } else {
        scrollUp();
        currMonth -= 1;
    }
    if(currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear(); 
        currMonth = date.getMonth(); 
       } else {
        date = new Date();
       }
    renderCalendar();
    e.preventDefault();
});
function showingDate() {
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var year = date.getFullYear().toString();
    showDate.text(month + '/' + day + '/' + year);
}
function showingTime() {
    var newDate = new Date();
    var hours = newDate.getHours();
    var minutes = newDate.getMinutes().toString().padStart(2, '0');
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    showTime.text(hours + ":" + minutes + " " + ampm);

    setTimeout(showingTime, 2000);
}
showingDate();
showingTime();