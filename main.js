const hms = document.querySelector('.houer')
const mts = document.querySelector('.munite')
const scd = document.querySelector('.second')
const timer = document.querySelector('.time')


setInterval(() => {
    const date = new Date()
    const houre = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    console.log(houre)

    const lhoure = houre >12 ?houre - 12: houre
    hms.textContent = lhoure < 10 ? '0' + lhoure : lhoure

    const lminute = minute <10? '0' + minute:minute
    mts.textContent =  lminute
    
    scd.textContent = second 
    timer.textContent = houre > 12 ? " pm": " Am"
    console.log(hms)
},1000)