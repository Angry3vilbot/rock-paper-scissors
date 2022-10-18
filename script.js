let optionsArray = ['rock', 'paper', 'scissors'] //list of possible moves
let result = document.getElementById('result') //get element made for displaying match result
let scorePc = document.getElementById('pcScore') //get element made for displaying cpu score
let scorePl = document.getElementById('plScore') //get element made for displaying player score
let playerScore = 0
let cpuScore = 0
function getComputerChoice() { //randomly generate an option for the computer to play
	let rand = optionsArray[Math.floor(Math.random()*3)]
	return(rand)
}
function playRound(){
	playerCh = this.id //player choice
	compCh = getComputerChoice()
	if (compCh === playerCh) {
		result.innerHTML = 'Draw<br>'
		scoreCheck()
		return
	}
	else if (compCh == 'rock' && playerCh == 'paper' || compCh == 'paper' && playerCh == 'scissors' ||
	 compCh == 'scissors' && playerCh == 'rock') { //check for players victory conditions
		result.innerHTML = 'You win, ' + playerCh + ' beats ' + compCh + '!'
		playerScore++
		scorePl.innerHTML = playerScore
		scoreCheck() //check the score
		return
	}
	else if (playerCh == 'rock' && compCh == 'paper' || playerCh == 'paper' && compCh == 'scissors' ||
	 playerCh == 'scissors' && compCh == 'rock') { //check for CPUs victory conditions
		result.innerHTML = 'You lose, ' + compCh + ' beats ' + playerCh + '.'
		cpuScore++
		scorePc.innerHTML = cpuScore
		scoreCheck() //check the score
		return
	}
}
function scoreCheck(){ //check the scores to see if someone won
	if (playerScore == 5){
		//declare the winner
		document.getElementById('winner').innerHTML = 'You have won the game!'
		//remove the ability to play
		buttonRock.removeEventListener('click', playRound)
		buttonPaper.removeEventListener('click', playRound)
		buttonScissors.removeEventListener('click', playRound)
	}
	else if (cpuScore == 5) {
		//declare the winner
		document.getElementById('winner').innerHTML = 'CPU is the winner'
		//remove the ability to play
		buttonRock.removeEventListener('click', playRound)
		buttonPaper.removeEventListener('click', playRound)
		buttonScissors.removeEventListener('click', playRound)
	}
}
let buttonRock = document.getElementById('rock')
let buttonPaper = document.getElementById('paper')
let buttonScissors = document.getElementById('scissors')

buttonRock.addEventListener('click', playRound)
buttonPaper.addEventListener('click', playRound)
buttonScissors.addEventListener('click', playRound)