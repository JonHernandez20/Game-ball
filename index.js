// PLayer user input
const userName = document.getElementById('player__user');
const informationName = document.getElementById('name');

// Container display
const containerNull = document.getElementById('container__start');
const containerGame = document.getElementById('container__game');

// Player Information
const score = document.getElementById('score');
const time = document.getElementById('time');
const name = document.getElementById('name');
const startDiv = document.getElementById('start');

// Ball Game
const ball = document.getElementById('ball__player');

// Value Win
let points = 0;
let timePoint = 9;
let winner = 0;

// FUNCTION CHECK LEVEL and CHECK CHARACTER
const checkLevel = () => {
	if(document.querySelector('input[name="level"]:checked'))
	{
		return document.f2.level.value;
	}
};

const checkCharacter = () => {
	if(document.querySelector('input[name="skin"]:checked'))
	{
		return document.f1.skin.value;
	}
};

// True Winner
const winnerPLayer = () => {
	
}

// Function Chronometer
const chronometer = (timeGame) => {
	const valueName = userName.value;
	const interval = setInterval(() => {
		timeGame--;
		time.innerText = timeGame;

		if(timeGame == 0 || timeGame < 0)
		{
			clearInterval(interval)
		}

		if(timeGame > 0)
		{
			ball.addEventListener('mouseover', over, true);		
		}

		if (timeGame == 0)
		{
			ball.removeEventListener('mouseover', over, true);
			winner = points;
			console.log('Ganador - ' + winner);
			console.log('Puntos - ' + points);
		}
	}, 1000)
};

// FUNCTION CREATE ELEMENT
const create = (img) => {
	let containerBall = document.getElementById('ball__player');
	let image = document.createElement('img');
	image.src = img;
	image.className = 'container__ball';
	containerBall.appendChild(image);
};

const modImg = (px, time) => {
	ball.style.width = `${px}px`;
	ball.style.height = `${px}px`;
	ball.style.transition = `all .${time}s`;
}

// Function game ball
function over()
{
	let randomNum = Math.round(Math.random()*300);
	let randomNumTwo = Math.round(Math.random()*1000);
	ball.style.marginTop = randomNum + 'px';
	ball.style.marginLeft = randomNumTwo + 'px';

	const pointsSum = () => {
		points++;
		score.innerText = points;
		return points;
	};

	return pointsSum();
}

// BTN Star
function starGame()
{
	const valueName = userName.value;
	if(valueName==='')
	{
		alert('Debes registrar tu nombre');
	} else 
	{
		checkValue();
		checkValueLevel();
		containerNull.style.display = 'none';
		containerGame.style.display = 'Flex';
	}
	name.innerText = valueName;
}

// BTN star game
function start()
{
	chronometer(timePoint+1);
}

// BTN try again game
function tryAgain()
{
	ball.style.marginTop = 0;
	ball.style.marginLeft = 0;
	score.innerText = '###';
	time.innerText = '10';
	points = 0;
}

//BTN finish game
function finish()
{
	console.log(checkValue());
	alert('Gracias por Jugar');
	window.location.reload()
	// containerNull.style.display = 'block';
	// containerGame.style.display = 'none';
}

// Check value to img
function checkValue()
{
	// ---RETURN IMG---
	let myImage = new Image();
	if(checkCharacter()==='Wolverine')
	{
		myImage.src = './img/wolverine.jpg';
		create(myImage.src);
	};
	if(checkCharacter()==='Venom')
	{
		myImage.src = './img/venom.jpg';
		create(myImage.src);
	};
	if(checkCharacter()==='Thor')
	{
		myImage.src = './img/thor.jpg';
		create(myImage.src);
	};
	if(checkCharacter()==='Spiderman')
	{
		myImage.src = './img/spiderman.jpg';
		create(myImage.src);
	};
	if(checkCharacter()==='Pantera negra')
	{
		myImage.src = './img/pantera.jpg';
		create(myImage.src);
	};
	if(checkCharacter()==='Iron Man')
	{
		myImage.src = './img/ironman.jpg';
		create(myImage.src);
	};
	if(checkCharacter()==='Hulk')
	{
		myImage.src = './img/hulk.jpg';
		create(myImage.src);
	};
	if(checkCharacter()==='Capitan America')
	{
		myImage.src = './img/capitan.jpg';
		create(myImage.src);
	};

	return myImage;
}

function checkValueLevel()
{
	if(checkLevel() == 'Novato')
	{
		modImg(100, 5);
	}
	if(checkLevel() == 'Facil')
	{
		modImg(80, 4);
	}
	if(checkLevel() == 'Medio')
	{
		modImg(60, 3);
	}
	if(checkLevel() == 'Dificil')
	{
		modImg(40, 2);
	}
	if(checkLevel() == 'Extremo')
	{
		modImg(20, 1);
	}
}