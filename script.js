let rockBtn = document.getElementById('rock')
let paperBtn = document.getElementById('paper')
let scissorsBtn = document.getElementById('scissors')
let result = document.getElementById('result')
let winsCounting = document.getElementById('winsCounting')
let lossesCounting = document.getElementById('lossesCounting')
let tiesCounting = document.getElementById('tiesCounting')
let resetBTN = document.getElementById('resetBTN')

rockBtn.addEventListener('click', rock)
paperBtn.addEventListener('click', paper)
scissorsBtn.addEventListener('click', scissors)

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

resetBTN.addEventListener('click', resetScore)

function resetScore(){
    score = {
    wins: 0,
    losses: 0,
    ties: 0
}

    winsCounting.innerHTML = `Wins: 0`
    lossesCounting.innerHTML = `Losses: 0`
    tiesCounting.innerHTML = `Ties: 0`
    result.innerHTML = ''
}

function updateScore() {
    JSON.parse(localStorage.getItem('score'))
    winsCounting.innerHTML = `Wins: ${score.wins}`
    lossesCounting.innerHTML = `Losses: ${score.losses}`
    tiesCounting.innerHTML = `Ties: ${score.ties}`
    localStorage.setItem('score', JSON.stringify(score))
}

function getComputerMove() {
    let computerMove 
    let numberGenerated = Math.floor(Math.random() * 9) + 1 // Generate a number bettewen 1 and 9
    if (numberGenerated >= 1 && numberGenerated <= 3){
    computerMove = 'Rock'
    }else if (numberGenerated > 3 && numberGenerated <= 6){
    computerMove = 'Paper'
    }else{
    computerMove = 'Scissors'
    }
    return computerMove
}

function play(playerMove) {
    let outcome = ""
    let computerMove = getComputerMove()
    if(playerMove === computerMove){
        outcome = 'Tie'
    }else if(playerMove === 'Rock' && computerMove === 'Scissors'){
        outcome = 'Win'
    }else if(playerMove === 'Paper' && computerMove === 'Rock'){
        outcome = 'Win'
    }else if(playerMove === 'Scissors' && computerMove === 'Paper'){
        outcome = 'Win'
    }else{
        outcome = 'Lose'
    }

    if(outcome === 'Win'){
        score.wins = score.wins + 1
    }else if(outcome === 'Tie'){
        score.ties = score.ties + 1
    }else{
        score.losses = score.losses + 1
    }

    result.innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${outcome}
    <br>
    <img src="images/${playerMove.toLowerCase()}.png" class="resultImage"> 
    X 
    <img src="images/${computerMove.toLowerCase()}.png" class="resultImage"> 
    `
    updateScore()
}

function rock(){
    play("Rock")
}

function paper(){
    play("Paper")
}

function scissors(){
    play("Scissors")
}

