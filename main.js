const startGameBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const parentTimeBth = document.querySelector('#timeList');
const board = document.querySelector('.board')
let timeEl = document.querySelector('#time');
let time = 0;
let score = 0;

startGameBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	screens[0].classList.add('up');
});
parentTimeBth.addEventListener('click', (e)=>{
	if(e.target.classList.contains('time-btn')){
		time = +e.target.getAttribute('data-time');
		startGame();		
	};
})


const startGame = (e)=> {
	screens[1].classList.add('up');
	timeEl.innerHTML = `00:${time}`;
	Interval()
}

const Interval = ()=>{
	intervalLL = setInterval((e)=>{
		--time;
		timeEl.innerHTML = `00:${time}`;
		if(time<10){
		timeEl.innerHTML = `00:0${time}`;
		}
		if(time <1){
			clearInterval(intervalLL);
			finishGame();
		}
	},1000)
};

const createCircle = ()=>{
	const div = document.createElement('div');
	let {width, height} = board.getBoundingClientRect();
	let randomNumber = createRandomeNumber(10,64);
	let x = createRandomeNumber(0, width-randomNumber);
	let y = createRandomeNumber(0, height-randomNumber);

	div.classList.add('circle');
	div.style.width = `${randomNumber}px`;
	div.style.height = `${randomNumber}px`;
	div.style.top = `${y}px`;
	div.style.left = `${x}px`;
	board.appendChild(div);

	div.addEventListener('click', ()=>{
		div.remove();
		score++;
		createCircle();
	})

};

const createRandomeNumber = (min, max)=>{
	return Math.round(Math.random()*(max-min)+min)
}
createCircle();


const finishGame = ()=>{
	board.remove();
	document.querySelector('h3').innerHTML = `Ваш счет: ${score}`;
};