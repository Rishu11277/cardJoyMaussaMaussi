function preload() {
    upload()
}

function setup() {
    up()
}

function draw() {
    sound.play()
    gameStart(width, innerHeight)
    gamePlay()
    gameEnd()
}