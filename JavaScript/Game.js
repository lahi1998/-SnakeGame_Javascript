import { Update as UpdateSnake, Draw as DrawSnake, Snake_Speed, GetSnakeHead, SnakeIntersection } from './Snake.js'
import { Update as UpdateFood, Draw as DrawFood } from './Food.js'



let lastRenderTime = 0
let gameover = false
const Gameboard = document.getElementById('Game-board')

function main(CurrentTime) {
    if (gameover) {
        if (confirm('You lost. Press ok to play again.')) {
            window.location = 'https://lahi1998.github.io/SnakeGame_Javascript/'
        }
        return
    }


    window.requestAnimationFrame(main)
    const SecondsSinceLastRender = (CurrentTime - lastRenderTime) / 1000
    if (SecondsSinceLastRender < 1 / Snake_Speed) return
    lastRenderTime = CurrentTime


    Update()
    Draw()
}
window.requestAnimationFrame(main)


function Update() {
    UpdateSnake()
    UpdateFood()
    CheckDeath()
}

function Draw() {
    Gameboard.innerHTML = ''
    DrawSnake(Gameboard)
    DrawFood(Gameboard)
}

function CheckDeath() {
    gameover = OutsideGrid(GetSnakeHead()) || SnakeIntersection(GetSnakeHead())
}

function OutsideGrid(position) {
    return (
        position.x < 1 || position.x > 30 || position.y < 1 || position.y > 30
    )

}