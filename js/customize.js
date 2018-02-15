

function setDate() {

	const tickSound = document.querySelector('.tick');
	tickSound.currentTime = 0;
	tickSound.play();

	const secondClass = document.querySelector('.second');
	const minClass = document.querySelector('.min');
	const hourClass = document.querySelector('.hour');
	
	const now = new Date();
	
	const secondsNow = now.getSeconds();
	const secondsDegrees = ((secondsNow / 60) * 360) + 90;
	
	secondClass.style.transform = `rotate(${secondsDegrees}deg)`;
	secondClass.innerHTML = "Second ( "+ secondsNow +" )";

	const minute = now.getMinutes();
	const minuteDegrees = ((minute / 60) * 360) + 90;

	minClass.style.transform = `rotate(${minuteDegrees}deg)`;
	minClass.innerHTML = "Minute ( "+ minute +" )";

	const hour = now.getHours();
	const hourDegrees = ((hour / 12) * 360) + 90;

	hourClass.style.transform = `rotate(${hourDegrees}deg)`;
	hourClass.innerHTML = "Hour ( "+ hour +" )";
}

setInterval(setDate,1000);