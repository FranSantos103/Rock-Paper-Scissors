let rockBtn = document.getElementById('rock')
let paperBtn = document.getElementById('paper')
let scissorsBtn = document.getElementById('scissors')
let result = document.getElementById('result')
let winsCounting = document.getElementById('winsCounting')
let lossesCounting = document.getElementById('lossesCounting')
let tiesCounting = document.getElementById('tiesCounting')

rockBtn.addEventListener('click', rock)
paperBtn.addEventListener('click', paper)
scissorsBtn.addEventListener('click', scissors)

let wins = 0
let losses = 0
let ties = 0

function rock(){
    let computerMove 
    let numberGenerated = Math.floor(Math.random() * 9) + 1 // Generate a number bettewen 1 and 9
    if (numberGenerated >= 1 && numberGenerated <= 3){
        computerMove = 'Rock'
        result.innerHTML = `You picked Rock. Computer picked ${computerMove}. Tie. <br>
        <img src="images/rock.png" alt="" class="resultImage"> X <img src="images/rock.png" alt="" class="resultImage">`
        ties = ties + 1
        tiesCounting.innerHTML = `Ties: ${ties}`
    } else if (numberGenerated > 3 && numberGenerated <= 6){
        computerMove = 'Paper'
        result.innerHTML = `You picked Rock. Computer picked ${computerMove}. You lose. <br>
        <img src="images/rock.png" alt="" class="resultImage"> X <img src="images/paper.png" alt="" class="resultImage">`
        losses = losses + 1
        lossesCounting.innerHTML = `Losses: ${losses}`
    } else{
        computerMove = 'Scissors'
        result.innerHTML = `You picked Rock. Computer picked ${computerMove}. You win. <br>
        <img src="images/rock.png" alt="" class="resultImage"> X <img src="images/scissors.png" alt="" class="resultImage">`
        wins = wins + 1
        winsCounting.innerHTML = `Wins: ${wins}` 
    }
}

function paper(){
    let computerMove 
    let numberGenerated = Math.floor(Math.random() * 9) + 1 // Generate a number bettewen 1 and 9
    if (numberGenerated >= 1 && numberGenerated <= 3){
        computerMove = 'Rock'
        result.innerHTML = `You picked Paper. Computer picked ${computerMove}. You win.
        <br> <img src="images/paper.png" alt="" class="resultImage"> X <img src="images/rock.png" alt="" class="resultImage">`
        wins = wins + 1
        winsCounting.innerHTML = `Wins: ${wins}` 
    } else if (numberGenerated > 3 && numberGenerated <= 6){
        computerMove = 'Paper'
        result.innerHTML = `You picked Paper. Computer picked ${computerMove}. Tie. <br>
        <img src="images/paper.png" alt="" class="resultImage"> X <img src="images/paper.png" alt="" class="resultImage">`
        ties = ties + 1
        tiesCounting.innerHTML = `Ties: ${ties}`

    } else{
        computerMove = 'Scissors'
        result.innerHTML = `You picked Paper. Computer picked ${computerMove}. You lose. <br> 
        <img src="images/paper.png" alt="" class="resultImage"> X <img src="images/scissors.png" alt="" class="resultImage">`
        losses = losses + 1
        lossesCounting.innerHTML = `Losses: ${losses}`
    }
}

function scissors(){
    let computerMove 
    let numberGenerated = Math.floor(Math.random() * 9) + 1 // Generate a number bettewen 1 and 9
    if (numberGenerated >= 1 && numberGenerated <= 3){
        computerMove = 'Rock'
        result.innerHTML = `You picked Scissors. Computer picked ${computerMove}. You lose. <br> <img src="images/scissors.png" alt="" class="resultImage"> X <img src="images/rock.png" alt="" class="resultImage">`
        losses = losses + 1
        lossesCounting.innerHTML = `Losses: ${losses}`
    } else if (numberGenerated > 3 && numberGenerated <= 6){
        computerMove = 'Paper'
        result.innerHTML = `You picked Scissors. Computer picked ${computerMove}. You win. <br> <img src="images/scissors.png" alt="" class="resultImage"> X <img src="images/paper.png" alt="" class="resultImage">`
        wins = wins + 1
        winsCounting.innerHTML = `Wins: ${wins}` 
    } else{
        computerMove = 'Scissors'
        result.innerHTML = `You picked Scissors. Computer picked ${computerMove}. Tie. <br> <img src="images/scissors.png" alt="" class="resultImage"> X <img src="images/scissors.png" alt="" class="resultImage">`
        ties = ties + 1
        tiesCounting.innerHTML = `Ties: ${ties}`
    }
}

