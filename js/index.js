const soat = document.querySelector(".soat");
const minut = document.querySelector(".minut");
const sekund = document.querySelector(".sekund");
let x = 0;
let isFirst = true;
setInterval(() => {
  let day = new Date();
  let m = day.getMinutes() * 6;
  let s = day.getSeconds();
  let h = day.getHours() * 30 + m / 12;
  if (isFirst) {
    x = s * 6;
    isFirst = false;
  } else {
    x += 6;
  }
  soat.style.transform = `rotate(${h}deg)`;
  minut.style.transform = `rotate(${m}deg)`;
  sekund.style.transform = `rotate(${x}deg)`;
}, 1000);
