// ------------------ Catch element
const pageIntro = document.getElementById('intro')
const pageRound = document.getElementById('round')
const pageRoundResult = document.getElementById('round-result')
const introBtn = document.getElementById('intro-btn')
const chooseRock = document.getElementById('rock')
const chooseScissor = document.getElementById('scissor')
const choosePaper = document.getElementById('paper')
const chooseRpsBtn = document.getElementById('choose-rps-btn')


// ------------------ Global Variables
let gamePlay = false
let playerSelected = ''
let boolPlayerSelect = false
let comSelected = ''


// ------------------ Gameplay Mechanic
function select(){
    let selected = ''
    playerSelected = ''

    chooseRock.addEventListener('click', e => {
        selected = 'rock'
    })
    chooseScissor.addEventListener('click', e => {
        selected = 'scissor'
    })
    choosePaper.addEventListener('click',e => {
    selected = 'paper'
    })
        
    chooseRpsBtn.addEventListener('click', e =>{
        if(selected == '') alert('Choose One!')
        playerSelected = selected
        return playerSelected
    })
}

function selectCom(){
    let comSelected = ''
    rpsArr = ['rock','scissor','paper']
    comSelected = rpsArr[Math.floor(Math.random() * 3)]
}

function roundVs(){
    switch (playerSelected){
        case 'rock':
            if (comSelected == 'rock') return 'draw'
            else if (comSelected == 'scissor') return 'win'
            else return 'lose'
        case 'scissor':
            if (comSelected == 'rock') return 'lose'
            else if (comSelected == 'scissor') return 'draw'
            else return 'win'
        case 'paper':
            if (comSelected == 'rock') return 'win'
            else if (comSelected == 'scissor') return 'lose'
            else return 'draw'
    }
}


// ------------------ Intro Event
introBtn.addEventListener('click', btn =>{
    pageIntro.style.cssText = 'display: none;'
    pageRound.style.cssText = 'display: flex'
    gamePlay = true
})

// ------------------ GamePlay Event

setInterval(()=>{
    if (gamePlay){
        console.log(12)
        let roundScore = 0
        for (let i = 0; i<5; i++){
    
            // player vs com
            select()
            selectCom()
            let roundResult = roundVs()
            if (roundResult == 'win'){
                roundScore++
            } else if(roundScore == 'lose'){
                roundScore--
            }
            pageRound.style.cssText = 'display: none;'
            pageRoundResult.style.cssText = 'display: flex'
            // round result
    
        }
    }
}, 1000)
