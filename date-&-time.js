let date = document.getElementById('date')
let time = document.getElementById('time')

function dateTime(){
  let dt = new Date()
  let showDate = dt.toLocaleDateString();
  let showTime = dt.toLocaleTimeString();

  date.innerText=showDate
  time.innerText=showTime
}
dateTime()
setInterval(dateTime,1000)

  let colors = ['pink','red','lightblue','yellow','orange']
  let cc = document.querySelectorAll('.cc')
  let count = 0

  function changeColor() {
    cc.forEach((ele) => {
      ele.style.cssText=
      `color:white;
      border-radius: 10px;
      margin: 20px;
      padding: .5rem 3rem;
      `
      ele.style.backgroundColor=colors[count]
    })
    count = (count + 1) % (colors.length)
  } 
  changeColor()
  setInterval(changeColor,2000)