const date = new Date();
const weekday = document.querySelector('.weekdays');
let monthNameInCalendar;

const Box_flightto = document.querySelector('#Section_to');
const Main_box = document.querySelector('#Main_calender');
 const monthDay = document.querySelector('.month_day');
const monthName = document.querySelector('.month_name');
const yearNumber = document.querySelector('.year_number');
const dayToDisplay = document.querySelector(".day_to_display");


Box_flightto.addEventListener('click', hideelements)

function hideelements(){
   
   
    Main_box.style.display="block";
  
  
  
}

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex;

  const months = [
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
    "December",
  ];



 

  let totalDaySum=1;
  let day;
monthNameInCalendar= months[date.getMonth()];

  

  

  document.querySelector(".date h1").innerHTML = months[date.getMonth()]+" "+2023;
 

  // document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

  monthDays.addEventListener('click', (e)=>{
    var path = e.path || (e.composedPath && e.composedPath());
    if(months[date.getMonth()]=="January"){
      totalDaySum=e.target.innerText;
    }
    else if(months[date.getMonth()]=="February"){
      totalDaySum=Number(e.target.innerText)+31;
    }
    else if(months[date.getMonth()]=="March"){
      totalDaySum=Number(e.target.innerText)+59;
    }
    else if(months[date.getMonth()]=="April"){
      totalDaySum=Number(e.target.innerText)+90;
    }
    else if(months[date.getMonth()]=="May"){
      totalDaySum=Number(e.target.innerText)+120;
    }
      
    else if(months[date.getMonth()]=="June"){
      totalDaySum=Number(e.target.innerText)+151;
      console.log(months[date.getMonth()])
    }
      
    else if(months[date.getMonth()]=="July"){
      totalDaySum=Number(e.target.innerText)+181;
    }
      
    else if(months[date.getMonth()]=="August"){
      totalDaySum=Number(e.target.innerText)+212;
    }
      
    else if(months[date.getMonth()]=="September"){
      totalDaySum=Number(e.target.innerText)+243;
    }
      
    else if(months[date.getMonth()]=="October"){
      totalDaySum=Number(e.target.innerText)+273;
    }
      
    else if(months[date.getMonth()]=="November"){
      totalDaySum=Number(e.target.innerText)+304;
    }
      
    else if(months[date.getMonth()]=="December"){
      totalDaySum=Number(e.target.innerText)+334;
    }
      
    
    
    
    
    
    if(totalDaySum%7==1){
        day="Sun"
    
      }else if(totalDaySum%7==2){
        day="Mon"
      }
      else if(totalDaySum%7==3){
        day="Tue"
      }
      else if(totalDaySum%7==4){
        day="Wed"
      }
      else if(totalDaySum%7==5){
        day="Thu"
      }
      else if(totalDaySum%7==6){
        day="Fri"
      }
      else if(totalDaySum%7==0){
        day="Sat"
      }
      

      dayToDisplay.innerText=day;
      monthDay.innerText=e.target.innerText;
      monthName.innerText=monthNameInCalendar.slice(0,3);
      yearNumber.innerText=2023;

      Main_box.style.display="none";


    
  })
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  console.log(date)
  if(monthNameInCalendar=="February"){
    document.querySelector(".prev").style.visibility="hidden";
  }

  if(monthNameInCalendar=="December"){
    document.querySelector(".next").style.visibility="visible";
  }

  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  console.log(monthNameInCalendar)
  if(monthNameInCalendar=="January"){
    document.querySelector(".prev").style.visibility="visible";
  }

  if(monthNameInCalendar=="November"){
    document.querySelector(".next").style.visibility="hidden";
  }
  renderCalendar();
});

renderCalendar();
