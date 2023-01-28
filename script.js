const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setData()
{
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
}

setInterval(setData, 1000);

setData();