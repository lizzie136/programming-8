const settings = {
    dayLabels : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    monthLabels : [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    day : (60*60*24*1000)
};
let start = document.getElementsByName("start-input")[0];
let end = document.getElementsByName("end-input")[0];
let country = document.getElementsByName("country-code")[0];
let btn = document.querySelectorAll("#main-form button")[0];
const init = () => {

    let startDate = new Date(start.value);
    let endDate = new Date(end.value);
    let days = Math.abs(Math.floor(endDate - startDate) / settings.day);
    let years = Math.abs(endDate.getFullYear - startDate.getFullYear);

    console.log(days);
    let calendars = document.getElementById("calendars");
    let divMonth = document.createElement("div");
    divMonth.classList.add("calendar-month");
    for(let i=0; i<days; i++){
        var date = new Date();
        date.setDate(startDate.getDate()+i);
        let day = date.getDay();
        var span = document.createElement("span");
        span.classList.add("calendar-day_"+day);
        span.append(document.createTextNode(day));
        divMonth.append(span);
        if(day == 6){
            divMonth.append(document.createElement("br"));
        }
    }
    calendars.append(divMonth);
};

start.addEventListener('change', (e) => {
    e.preventDefault();
    let startDate =  e.currentTarget.value;
    if(startDate > end.value){
        end.value = startDate;
        return;
    }
});

end.addEventListener('change', (e) => {
    e.preventDefault();
    let endDate = e.currentTarget.value;
    if(endDate < start.value){
        end.value = start.value;
        return;
    }
});

country.addEventListener('change', (e) => {
    e.preventDefault();
    let code = e.currentTarget.value;
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    init();
});