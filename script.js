function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const towtruck = document.querySelector('#towtruck');
towtruck.style.transform = 'scale(-1, 1)';
const car = document.querySelector('#car');


window.addEventListener('keyup', function(e) {
	
	if (e.key === 'ArrowDown' || e.key === 'Down') {
		const currTop = extractPos(towtruck.style.top);
		towtruck.style.top = `${currTop + 50}px`;
	} else if (e.key === 'ArrowUp' || e.key === 'Up')
	{
		const currTop = extractPos(towtruck.style.top);
		towtruck.style.top = `${currTop - 50}px`;
	} else if (e.key === 'ArrowRight' || e.key === 'Right')
	{
		const currLeft = extractPos(towtruck.style.left);
		towtruck.style.left = `${currLeft + 50}px`;
		towtruck.style.transform = 'scale(-1, 1)';
	} else if (e.key === 'ArrowLeft' || e.key === 'Left')
	{
		const currLeft = extractPos(towtruck.style.left);
		towtruck.style.left = `${currLeft - 50}px`;
		towtruck.style.transform = 'scale(1, 1)';
	}
	if(isTouching(towtruck, car)) moveCar();
})

//remove the 'px' from the position string
const extractPos = (pos) => {
	//for the first time, in which there is no position yet
	if(!pos) return 100;
	return parseInt(pos.slice(0, -2));
}
	
const moveCar = () => {
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	car.style.top = `${y}px`;
	car.style.left = `${x}px`;
}

//initialize the car somewhere else than the towtruck
moveCar();