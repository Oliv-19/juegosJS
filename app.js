//game 1

        const computerChoiceDisplay = document.getElementById ("computer-choice")
        const userChoiceDisplay = document.getElementById ("user-choice")
        const resultDisplay = document.getElementById ("result")
        const possibleChoices = document.querySelectorAll(".button-1")
        let userChoice 
        let computerChoice
        let result

        possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
        }))

        function generateComputerChoice() {
            const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
            
            if( randomNumber === 1) {
                computerChoice = 'Piedra'
            }
            if( randomNumber === 2) {
                computerChoice = 'Tijera'
            }
            if( randomNumber === 3) {
                computerChoice = 'Papel'
            }
            computerChoiceDisplay.innerHTML = computerChoice
        }

        function getResult(){
            if(computerChoice === userChoice){
                result = 'Empate!'
            }
            if(computerChoice === 'Piedra' && userChoice === 'Papel'){
                result = 'Ganaste!'
            }
            if(computerChoice === 'Piedra' && userChoice === 'Tijera'){
                result = 'Perdiste!'
            }
            if(computerChoice === 'Papel' && userChoice === 'Tijera'){
                result = 'Ganaste!'
            }
            if(computerChoice === 'Papel' && userChoice === 'Piedra'){
                result = 'Perdiste!'
            }
            if(computerChoice === 'Tijera' && userChoice === 'Piedra'){
                result = 'Ganaste!'
            }
            if(computerChoice === 'Tijera' && userChoice === 'Papel'){
                result = 'Perdiste!'
            }
            resultDisplay.innerHTML = result
        }

//game 2

        const cardArray = [
            {
                name: 'gato',
                img: 'images/one.jpg'
            },
            {
                name: 'perro',
                img: 'images/two.jpg'
            },
            {
                name: 'vaca',
                img: 'images/three.jpg'
            },
            {
                name: 'hamster',
                img: 'images/four.jpg'
            },
            {
                name: 'elefante',
                img: 'images/five.jpg'
            },
            {
                name: 'jirafa',
                img: 'images/six.jpg'
            },
            {
                name: 'gato',
                img: 'images/one.jpg'
            },
            {
                name: 'perro',
                img: 'images/two.jpg'
            },
            {
                name: 'vaca',
                img: 'images/three.jpg'
            },
            {
                name: 'hamster',
                img: 'images/four.jpg'
            },
            {
                name: 'elefante',
                img: 'images/five.jpg'
            },
            {
                name: 'jirafa',
                img: 'images/six.jpg'
            },
        ]

        cardArray.sort(() => 0.5 - Math.random())

        const gridDisplay = document.querySelector("#grid")
        const resultTwoDisplay = document.querySelector('#result-2')

        let cardsChosen = []

        let cardsChosenIds= []


        const cardsWon = []

        function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/flor.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gridDisplay.appendChild(card)
            }
        }
        createBoard()

        function checkMatch() {
            const cards = document.querySelectorAll('img')
            const optionOneId = cardsChosenIds[0]
            const optionTwoId = cardsChosenIds[1]
            console.log(cards)
            console.log('check for match')
            if (optionOneId == optionTwoId) {
                // alert('You have clicked the same image!')
                cards[optionOneId].setAttribute('src', 'images/flor.jpg')
                cards[optionTwoId].setAttribute('src', 'images/flor.jpg')
            }

            if (cardsChosen[0] == cardsChosen[1]) {
                // alert('You found a Match!')
                cards[optionOneId].setAttribute('src', 'images/white.jpg')
                cards[optionTwoId].setAttribute('src', 'images/white.jpg')
                cards[optionOneId].removeEventListener('click', flipCard)
                cards[optionTwoId].removeEventListener('click', flipCard)
                cardsWon.push(cardsChosen)
                
            } else {
                cards[optionOneId].setAttribute('src', 'images/flor.jpg')
                cards[optionTwoId].setAttribute('src', 'images/flor.jpg')
                // alert('Try again')
            }
            resultTwoDisplay.textContent = cardsWon.length
            cardsChosen = []
            cardsChosenIds = []

            if(cardsWon.length == cardArray.length/2) {
                resultTwoDisplay.textContent = 'Ganaste'
            }
        }

        function flipCard() {
        const cardId = this.getAttribute('data-id')
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenIds.push(cardId)
            console.log(cardsChosen)
            console.log(cardsChosenIds)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardsChosen.length === 2) {
                setTimeout(checkMatch, 500)
            }
        }

//game 3

        const squares = document.querySelectorAll('.square')

        const mole = document.querySelector('.mole')

        const timeLeft = document.querySelector('#time-left')

        const scoreThree = document.querySelector('#score-3')

        let resultThree = 0
        let hitPosition 
        let currentTime = 60
        let timerId = null

        let startButtonOne = document.querySelector('.button-3')

        
        


        function randomSquare (){
            squares.forEach(square => {
                square.classList.remove('mole')
            })
            
            let randomSquare = squares[Math.floor (Math.random() * 9)]
            randomSquare.classList.add('mole')

            hitPosition = randomSquare.id
        }

         squares.forEach(square => {
             square.addEventListener('mousedown', () => {
                 if (square.id == hitPosition) {
                     resultThree++
                    scoreThree.textContent = resultThree
                    hitPosition = null
                 }
             })
         })

        

        function movemole() {
            timerId = setInterval(randomSquare, 500)
        }

        //movemole()

        function countDown() {
            currentTime--
            timeLeft.textContent = currentTime

            if (currentTime == 0) {
                clearInterval(countDownTimerId)
                clearInterval(timerId)
                scoreThree.innerHTML = resultThree

            }
        }
        
         startButtonOne.addEventListener('click', (e) => {
             randomSquare ()
             movemole()
             countDown()
              countDownTimerId = setInterval(countDown, 1000)
         })

        

       // let countDownTimerId = setInterval(countDown, 1000)


//Game 4


        const gridFour = document.querySelector('.grid-4')
        const scoreDisplayFour = document.querySelector('#score-four')
        let scoreFour = 0
        const blockWidth = 100
        const blockHeight = 20
        const ballDiameter = 20
        const boardWidth = 560
        const boardHeight = 450
        let timerIdTwo 

        let xDirection = -2
        let yDirection = 2

        const userStart = [230, 10]
        let currentPosition = userStart

        const ballStart = [270, 40]
        let ballCurrentPosition = ballStart

        let startButtonTwo = document.querySelector('.button-4')


        //start button
        startButtonTwo.addEventListener('click', (e) => {
            if (timerIdTwo) {
                clearInterval(timerIdTwo)
                timerIdTwo = null
                document.removeEventListener('keydown', moveUser)
            } else {
                 drawUser()
            drawBall()
            moveUser(e)
            moveBall()
            addBall()
            timerIdTwo = setInterval(moveBall, 30)
            document.addEventListener('keydown', moveUser)
            }

           
        })

        //create block
        class Block {
            constructor(xAxis, yAxis){
                this.bottomLeft = [xAxis, yAxis]
                this.bottomRight = [xAxis + blockWidth, yAxis]
                this.topLeft = [xAxis, yAxis + blockHeight]
                this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
                
            }

        }

        //all my block
        const blocks = [
            new Block(10,420),
            new Block(120,420),
            new Block(230,420),
            new Block(340,420),
            new Block(450,420),
            new Block(10,390),
            new Block(120,390),
            new Block(230,390),
            new Block(340,390),
            new Block(450,390),
            new Block(10,360),
            new Block(120,360),
            new Block(230,360),
            new Block(340,360),
            new Block(450,360),
            new Block(10,330),
            new Block(120,330),
            new Block(230,330),
            new Block(340,330),
            new Block(450,330),
            new Block(10,300),
            new Block(120,300),
            new Block(230,300),
            new Block(340,300),
            new Block(450,300),
            new Block(10,270),
            new Block(120,270),
            new Block(230,270),
            new Block(340,270),
            new Block(450,270),
            new Block(10,240),
            new Block(120,240),
            new Block(230,240),
            new Block(340,240),
            new Block(450,240),
            new Block(10,210),
            new Block(120,210),
            new Block(230,210),
            new Block(340,210),
            new Block(450,210),
            
            
        ]



        //draw all my block
        function addBlocks() {
        for (let i = 0; i < blocks.length; i++) {
            const block = document.createElement('div')
            block.classList.add('block')
            block.style.left = blocks[i].bottomLeft[0] + 'px'
            block.style.bottom = blocks[i].bottomLeft[1] + 'px'
            gridFour.appendChild(block)
        }
        }
        addBlocks()

        //add user

        const userFour = document.createElement('div')
        userFour.classList.add('userfour')
        drawUser()
        gridFour.appendChild(userFour)

        //draw the user
        function drawUser() {
            userFour.style.left = currentPosition[0] + 'px'
            userFour.style.bottom = currentPosition[1] + 'px'
        }

        //draw the ball
        function drawBall() {
            ball.style.left = ballCurrentPosition[0] + 'px'
            ball.style.bottom = ballCurrentPosition[1] + 'px'
        }


        //move user

        function moveUser(e) {
            switch(e.key) {
                case 'a':
                    if (currentPosition[0] > 0) {
                    currentPosition[0] -= 10
                    drawUser() 
                    
                    }
                break; 
                case 'd':
                    if (currentPosition[0] < boardWidth - blockWidth) {
                        currentPosition[0] += 10
                        drawUser()
                    }
                    break
            }
        }

        // document.addEventListener('keydown', moveUser)

        //add ball
        function addBall() {
            ball.classList.add('ball')
        //drawBall()
        gridFour.appendChild(ball)
        }
        const ball = document.createElement('div')
        

        //move the ball

        function moveBall() {
            ballCurrentPosition[0] += xDirection
            ballCurrentPosition[1] += yDirection
            drawBall()
            checkForCollisions()
        }

        
        

        // check for collision

        function checkForCollisions() {
            //check for block collision
            for (let i = 0; i < blocks.length; i++) {
                if (
                    (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) && ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
                ) {
                    const allBlocks = Array.from(document.querySelectorAll('.block'))
                    allBlocks[i].classList.remove('block')
                    blocks.splice(i, 1)
                    changeDirection()
                    scoreFour++
                    scoreDisplayFour.innerHTML = scoreFour
                    


                    //check for win
                    if (blocks.length === 0) {
                        scoreDisplayFour.innerHTML = 'Ganaste'
                        clearInterval(timerIdTwo)
                        document.removeEventListener('keydown', moveUser)
                        
                    }
                }
            }
            


            // check for wall collision
            if(ballCurrentPosition[0] >= (boardWidth- ballDiameter) || ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
            ballCurrentPosition[0] <= 0 ) {
                changeDirection()
            }

            // check for user collisions
            if (
                (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < (currentPosition[0] + blockWidth)) && (ballCurrentPosition[1] > currentPosition[1] && (ballCurrentPosition[1] < currentPosition[1] + blockHeight))
            ) {
                changeDirection()
            }



            //check for game over

            if( ballCurrentPosition[1] <= 0) {
                clearInterval(timerIdTwo)
                scoreDisplayFour.innerHTML = 'Perdiste'
                document.removeEventListener('keydown', moveUser)
            }
        }

        //timerIdTwo = setInterval(moveBall, 30)
    
        function changeDirection(){
            if (xDirection === 2 && yDirection === 2) {
                yDirection = -2
                return
            }
            if (xDirection === 2 && yDirection === -2) {
                xDirection = -2
                return
            }
            if (xDirection === -2 && yDirection === -2) {
            yDirection = 2
            return
            }
            if (xDirection === -2 && yDirection === 2) {
                xDirection = 2
                return
            }
        }
//Game 5
const timeLeftFiveDisplay =  document.querySelector('#time-left-five')
        const resultFiveDisplay = document.querySelector('#result-five')
        const startPauseButton = document.querySelector('#start-pause-button')
        const squaresFrog = document.querySelectorAll ('.grid-five div')
        const logsLeft = document.querySelectorAll('.log-left')
        const logsRight = document.querySelectorAll('.log-right')
        const carsLeft = document.querySelectorAll('.car-left')
        const carsRight = document.querySelectorAll('.car-right')

        let currentIndex = 76
        const width = 9
        let timerIdFive 
        let outcomeTimerId
        let currentTimeFive = 20
        
        function moveFrog(e) {

            squaresFrog[currentIndex].classList.remove('frog')
            
            switch(e.key) {
                case 'a' :
                    if (currentIndex % width !== 0)currentIndex -= 1
                    
                    break
                case 'd' :
                    if(currentIndex % width < width - 1) currentIndex += 1
                    break
                case 'w' :
                    if (currentIndex - width >= 0) currentIndex -= width
                    break
                case 's' :
                    if(currentIndex + width < width * width) currentIndex += width
                    break    
            }

            squaresFrog[currentIndex].classList.add('frog')
        }
        

        function autoMoveElements() {
          currentTimeFive--
          timeLeftFiveDisplay.textContent = currentTimeFive
          logsLeft.forEach(logLeft => moveLogLeft(logLeft))
          logsRight.forEach(logRight => moveLogRight(logRight))
          carsLeft.forEach(carLeft => moveCarLeft(carLeft))
          carsRight.forEach(carRight => moveCarRight(carRight))
          lose()
          win()
        }

        function checkOutcomes() {
          lose()
          win()
        }


        function moveLogLeft (logLeft) {
          switch(true) {
            case logLeft.classList.contains('l1') :
                logLeft.classList.remove('l1')
                logLeft.classList.add('l2')
                break
          case logLeft.classList.contains('l2') :
                logLeft.classList.remove('l2')
                logLeft.classList.add('l3')
                break      
          case logLeft.classList.contains('l3') :
                logLeft.classList.remove('l3')
                logLeft.classList.add('l4')
                break
          case logLeft.classList.contains('l4') :
                logLeft.classList.remove('l4')
                logLeft.classList.add('l5')
                break   
          case logLeft.classList.contains('l5') :
                logLeft.classList.remove('l5')
                logLeft.classList.add('l1')
                break      
                
          }
        }

        function moveLogRight(logRight) {
          switch(true) {
              case logRight.classList.contains('l1') :
                  logRight.classList.remove('l1')
                  logRight.classList.add('l5')
                  break
              case logRight.classList.contains('l2') :
                  logRight.classList.remove('l2')
                  logRight.classList.add('l1')
                  break
              case logRight.classList.contains('l3') :
                  logRight.classList.remove('l3')
                  logRight.classList.add('l2')
                  break
              case logRight.classList.contains('l4') :
                  logRight.classList.remove('l4')
                  logRight.classList.add('l3')
                  break
              case logRight.classList.contains('l5') :
                  logRight.classList.remove('l5')
                  logRight.classList.add('l4')
                  break
          }
      }

      function moveCarLeft(carLeft) {
        switch(true) {
            case carLeft.classList.contains('c1') :
                carLeft.classList.remove('c1')
                carLeft.classList.add('c2')
                break
            case carLeft.classList.contains('c2') :
                carLeft.classList.remove('c2')
                carLeft.classList.add('c3')
                break
            case carLeft.classList.contains('c3') :
                carLeft.classList.remove('c3')
                carLeft.classList.add('c1')
                break
        }
    }

    function moveCarRight(carRight) {
      switch(true) {
          case carRight.classList.contains('c1') :
              carRight.classList.remove('c1')
              carRight.classList.add('c3')
              break
          case carRight.classList.contains('c2') :
              carRight.classList.remove('c2')
              carRight.classList.add('c1')
              break
          case carRight.classList.contains('c3') :
              carRight.classList.remove('c3')
              carRight.classList.add('c2')
              break
      }
  }

  function lose() {
    if (squaresFrog[currentIndex].classList.contains('c1') ||
    squaresFrog[currentIndex].classList.contains('l4')  ||
    squaresFrog[currentIndex].classList.contains('l5')  ||
    currentTimeFive <= 0) {
      resultFiveDisplay.textContent = 'Perdiste'
        clearInterval(timerIdFive)
        clearInterval(outcomeTimerId)
        squaresFrog[currentIndex].classList.remove('frog')
        document.removeEventListener('keyup', moveFrog)
    }
  }

  function win() {
    if(squaresFrog[currentIndex].classList.contains('ending-block')) {
      resultFiveDisplay.textContent = 'Ganaste'
        clearInterval(timerIdFive)
        clearInterval(outcomeTimerId)
        document.removeEventListener('keyup', moveFrog)
    }
  }

  startPauseButton.addEventListener('click', () => {
    console.log('timerIdFive', timerIdFive)
    if (timerIdFive) {
      clearInterval(timerIdFive)
      clearInterval(outcomeTimerId)
      outcomeTimerId = null
      document.removeEventListener('keyup', moveFrog)
      timerIdFive = null
    } else {
      timerIdFive = setInterval(autoMoveElements, 1000)
      outcomeTimerId = setInterval(checkOutcomes, 50)
      document.addEventListener('keyup', moveFrog)
    }
  }) 

//game 6

const squaresSix = document.querySelectorAll('.grid-six div')
const resultSix = document.querySelector('#result-six')
const displayCurrentPlayer = document.querySelector('#current-player')
let currentPlayer = 1

const winningArray = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
]

function checkBoard() {
    for (let i = 0; i < winningArray.length; i++) {
        const square1 = squaresSix[winningArray[i] [0]]
        const square2 = squaresSix[winningArray[i] [1]]
        const square3 = squaresSix[winningArray[i] [2]]
        const square4 = squaresSix[winningArray[i] [3]]

    //check squares for class player-1
        if(
    square1.classList.contains('player-1') && 
    square2.classList.contains('player-1') &&
    square3.classList.contains('player-1') &&
    square4.classList.contains('player-1')) 
    {
        resultSix.innerHTML = 'Jugador uno Gana'
    }
    //check squares for class player-2
    if(
     square1.classList.contains('player-2') && 
     square2.classList.contains('player-2') &&
     square3.classList.contains('player-2') &&
     square4.classList.contains('player-2')) 
    {
    resultSix.innerHTML = 'Jugador Dos Gana'
     }
    }  
}

for ( let i = 0; i < squaresSix.length; i++) {
    squaresSix[i].onclick = () => {
        // if square is taken, can go on top of it
        if (squaresSix [i + 7].classList.contains('taken') && !squaresSix[i].classList.contains('taken')) {
            if (currentPlayer == 1) {
                squaresSix[i].classList.add('taken')
                squaresSix[i].classList.add('player-1')
                currentPlayer = 2
                displayCurrentPlayer.innerHTML = currentPlayer
            } else if (currentPlayer == 2) {
                squaresSix[i].classList.add('taken')
                squaresSix[i].classList.add('player-2')
                currentPlayer = 1
                displayCurrentPlayer.innerHTML = currentPlayer
            } 
        }else  alert('No puedes ponerlo ahí') 
        //alert('cant go here')
        checkBoard()
    }
}

// game 7

const gridSeven = document.querySelector ('.grid-7')
const result7Display = document.querySelector('.results7')
const puntaje = document.querySelector('.puntaje')

let currentShooterIndex = 202
let width7 = 15
let direction = 1
let invadersId 
let goingRight = true
let aliensRemoved = []
let results7 = 0


const startButton7 = document.querySelector('.button7')
// let timerIdSeven

 startButton7.addEventListener('click', (e) => {
    moveInvaders()
    draw7()
    remove()
    moveShooter(e)
    shoot(e)
    square7[currentShooterIndex].classList.add('shooter')
    document.addEventListener('keydown', shoot)
    invadersId = setInterval(moveInvaders, 600)
    document.addEventListener('keydown', moveShooter)
     })



 for (let i = 0; i < 225; i++) {
     const squaresSeven = document.createElement('div')
     gridSeven.appendChild(squaresSeven)
 }

const square7 = Array.from(document.querySelectorAll('.grid-7 div'))

const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

function draw7() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if(!aliensRemoved.includes(i)) {
            square7[alienInvaders[i]].classList.add('invader')
        }
      }
}

draw7()

function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
      square7[alienInvaders[i]].classList.remove('invader')
    }
  }


// square7[currentShooterIndex].classList.add('shooter')

function moveShooter(e) {
    square7[currentShooterIndex].classList.remove('shooter')
    switch(e.key) {
        case 'a':
            if (currentShooterIndex % width7 !== 0) currentShooterIndex -=1
        break
        case 'd':
            if (currentShooterIndex % width7 < width7 -1) currentShooterIndex +=1
            break
    }
    square7[currentShooterIndex].classList.add('shooter')
}
//  document.addEventListener('keydown', moveShooter)

function moveInvaders() {
    const leftEdge = alienInvaders[0] % width7 === 0
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width7 === width7 -1
    remove()
  
    if (rightEdge && goingRight) {
      for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += width7 +1
        direction = -1
        goingRight = false
      }
    }
  
    if(leftEdge && !goingRight) {
      for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += width7 -1
        direction = 1
        goingRight = true
      }
    }
  
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += direction
    }
  
    draw7()
  
    if (square7[currentShooterIndex].classList.contains('invader', 'shooter')) {
      result7Display.innerHTML = 'GAME OVER'
      clearInterval(invadersId)
    }
  
    for (let i = 0; i < alienInvaders.length; i++) {
      if(alienInvaders[i] > (square7.length)) {
        result7Display.innerHTML = 'GAME OVER'
        clearInterval(invadersId)
      }
    }
    if (aliensRemoved.length === alienInvaders.length) {
      result7Display.innerHTML = 'Ganaste'
      clearInterval(invadersId)
    }
  }

//   invadersId = setInterval(moveInvaders, 600)

function shoot(e) {
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser() {
        square7[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width7
        square7[currentLaserIndex].classList.add('laser')

        if (square7[currentLaserIndex].classList.contains('invader')) {
            square7[currentLaserIndex].classList.remove('laser') 
            square7[currentLaserIndex].classList.remove('invader')
            square7[currentLaserIndex].classList.add('boom')

            setTimeout(() => square7[currentLaserIndex].classList.remove('boom'), 300)
            clearInterval(laserId)

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
            aliensRemoved.push(alienRemoved)
            results7++
            puntaje.innerHTML = results7

            console.log(aliensRemoved)
        }
    }
    switch(e.key) {
            case 'w' :
                laserId = setInterval (moveLaser, 100)
        }
}

 //document.addEventListener('keydown', shoot)

