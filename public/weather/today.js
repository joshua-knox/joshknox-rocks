let time = '12:00'
let date = '3/3/2021'
let weather = '72°' 

const timeElement = window.document.querySelector("#time")
const dateElement = window.document.querySelector("#date")
const weatherElement = window.document.querySelector("#weather")
const refreshElement = window.document.querySelector("#refresh")

timeElement.innerText = time
dateElement.innerText = date
weatherElement.innerText = weather

refreshElement.addEventListener("click", function() {
    var newTime = '12:01'
   timeElement.innerText = newTime
  });
  