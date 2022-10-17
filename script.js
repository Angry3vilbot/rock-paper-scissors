let optionsArray = ['rock', 'paper', 'scissors']
function getComputerChoice() {
	let rand = optionsArray[Math.floor(Math.random()*3)]
	console.log("cpu choice is: " + rand)
	return(rand)
}
function playRound(playerCh, compCh){
	playerCh = playerCh.toLowerCase()
	if (compCh === playerCh) {
		document.write('Draw<br>')
		return(0)
	}
	else if (compCh == 'rock' && playerCh == 'paper' || compCh == 'paper' && playerCh == 'scissors' ||
	 compCh == 'scissors' && playerCh == 'rock') {
		document.write('You Win!!! ' + playerCh + ' beats ' + compCh + '<br>')
		return(1)
	}
	else if (playerCh == 'rock' && compCh == 'paper' || playerCh == 'paper' && compCh == 'scissors' ||
	 playerCh == 'scissors' && compCh == 'rock') {
		document.write('You Lose! ' + compCh + ' beats ' + playerCh + '<br>')
		return(-1)
	}
	else alert('Invalid Choice')
}
function game(){
	let score = 0
	for (var i = 0; i < 5; i++) {
		score = score + playRound(prompt('Enter your choice!'), getComputerChoice())
	}
	if (score > 0) {
			document.write('Victory!')
	}
	else if (score < 0) {
			document.write('You Lost!')
	}
	else if (score == 0){
			document.write('Draw')
	} 
}

game()