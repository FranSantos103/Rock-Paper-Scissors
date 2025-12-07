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

function rock(){
    let computerMove 
    let numberGenerated = Math.floor(Math.random() * 9) + 1 // Generate a number bettewen 1 and 9
    if (numberGenerated >= 1 && numberGenerated <= 3){
        computerMove = 'Rock'
        result.innerHTML = `You picked Rock. Computer picked ${computerMove}. Tie. <br>
        <img src="images/rock.png" alt="" class="resultImage"> X <img src="images/rock.png" alt="" class="resultImage">`
        score.ties = score.ties + 1
        localStorage.setItem('score', JSON.stringify(score))
        updateScore()
    } else if (numberGenerated > 3 && numberGenerated <= 6){
        computerMove = 'Paper'
        result.innerHTML = `You picked Rock. Computer picked ${computerMove}. You lose. <br>
        <img src="images/rock.png" alt="" class="resultImage"> X <img src="images/paper.png" alt="" class="resultImage">`
        score.losses = score.losses + 1
        localStorage.setItem('score', JSON.stringify(score))
       updateScore()
    } else{
        computerMove = 'Scissors'
        result.innerHTML = `You picked Rock. Computer picked ${computerMove}. You win. <br>
        <img src="images/rock.png" alt="" class="resultImage"> X <img src="images/scissors.png" alt="" class="resultImage">`
        score.wins = score.wins + 1
        localStorage.setItem('score', JSON.stringify(score))
        updateScore()
    }
}

function paper(){
    let computerMove 
    let numberGenerated = Math.floor(Math.random() * 9) + 1 // Generate a number bettewen 1 and 9
    if (numberGenerated >= 1 && numberGenerated <= 3){
        computerMove = 'Rock'
        result.innerHTML = `You picked Paper. Computer picked ${computerMove}. You win.
        <br> <img src="images/paper.png" alt="" class="resultImage"> X <img src="images/rock.png" alt="" class="resultImage">`
        score.wins = score.wins + 1
        localStorage.setItem('score', JSON.stringify(score))
        updateScore()
    } else if (numberGenerated > 3 && numberGenerated <= 6){
        computerMove = 'Paper'
        result.innerHTML = `You picked Paper. Computer picked ${computerMove}. Tie. <br>
        <img src="images/paper.png" alt="" class="resultImage"> X <img src="images/paper.png" alt="" class="resultImage">`
        score.ties = score.ties + 1
        localStorage.setItem('score', JSON.stringify(score))
        updateScore()
    } else{
        computerMove = 'Scissors'
        result.innerHTML = `You picked Paper. Computer picked ${computerMove}. You lose. <br> 
        <img src="images/paper.png" alt="" class="resultImage"> X <img src="images/scissors.png" alt="" class="resultImage">`
        score.losses = score.losses + 1
        localStorage.setItem('score', JSON.stringify(score))
        updateScore()
    }
}

function scissors(){
    let computerMove 
    let numberGenerated = Math.floor(Math.random() * 9) + 1 // Generate a number bettewen 1 and 9
    if (numberGenerated >= 1 && numberGenerated <= 3){
        computerMove = 'Rock'
        result.innerHTML = `You picked Scissors. Computer picked ${computerMove}. You lose. <br> <img src="images/scissors.png" alt="" class="resultImage"> X <img src="images/rock.png" alt="" class="resultImage">`
        score.losses = score.losses + 1
        localStorage.setItem('score', JSON.stringify(score))
        updateScore()
    } else if (numberGenerated > 3 && numberGenerated <= 6){
        computerMove = 'Paper'
        result.innerHTML = `You picked Scissors. Computer picked ${computerMove}. You win. <br> <img src="images/scissors.png" alt="" class="resultImage"> X <img src="images/paper.png" alt="" class="resultImage">`
        score.wins = score.wins + 1
        localStorage.setItem('score', JSON.stringify(score))
        updateScore()
    } else{
        computerMove = 'Scissors'
        result.innerHTML = `You picked Scissors. Computer picked ${computerMove}. Tie. <br> <img src="images/scissors.png" alt="" class="resultImage"> X <img src="images/scissors.png" alt="" class="resultImage">`
        score.ties = score.ties + 1
        localStorage.setItem('score', JSON.stringify(score))
        updateScore()
    }
}

