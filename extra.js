var backgroundImgStart, backgroundImgPlay, backgroundImgEnd, gameState;

function upload() {
    backgroundImgStart = loadImage("backgroundCodingStart.jpeg")
    backgroundImgEnd = loadImage("card1.png")
    backgroundImgPlay = loadImage("card.png");
    sound = new Audio("New Recording 24.m4a")
    endSound = new Audio("Rishik Music 3.m4a")

}

function up() {
    createCanvas(windowWidth, windowHeight)
    gameState = 1

}

function gameStart(width, height) {
    if (gameState == 1) {
        image(backgroundImgStart, 0, 0, width, height)
        textSize(30)
        fill("black")
        textFont("Times New Roman")

        text("Hope you enjoy the card!", 500, 220)
        text("Press the right arrow to get to the next part of the card!", 500, 525)
        if (keyIsDown(RIGHT_ARROW)) {
            gameState = 2
        }


    }
}

function gamePlay() {
    if (gameState == 2) {
        image(backgroundImgPlay, 0, 0, width, height)
        
        

        setTimeout(() => {
           gameState = 3
        },14270)
    }
}

    function gameEnd() {
        if (gameState == 3) {
            image(backgroundImgEnd, 0, 0, width, height)
            sound.pause()
            endSound.play()
            endSound.loop = false
        }
    }