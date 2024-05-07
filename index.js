const myDate = document.getElementById('mydate')
const myTime = document.getElementById('mytime')

function dateAndTime() {
const currentDate = new Date()
console.log(currentDate)

let todaysDate = currentDate.getDate()
console.log( todaysDate)

let monthName = currentDate.toLocaleString('default', { month: 'long' })
console.log(monthName)

let year = currentDate.getFullYear()
console.log(year)

let hours = currentDate.getHours()
console.log(hours)

let minutes = currentDate.getMinutes()
console.log(minutes)

let seconds = currentDate.getSeconds()
console.log(seconds)

console.log(todaysDate, monthName, year)
myDate.innerHTML = (`${todaysDate}-${monthName}-${year}`)

console.log(hours, minutes, seconds)
myTime.innerHTML = (`${hours}:${minutes}:${seconds}`)

}

setInterval(dateAndTime, 1000)
dateAndTime()