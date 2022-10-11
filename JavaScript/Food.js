import { onSnake, expandSnake } from './Snake.js'

let Food = { x: 15, y: 18 }
let rnd = 4
const Expation_Rate = 1
export function Update() {
    if (onSnake(Food)) {
         rnd = RandomNum()
        expandSnake(Expation_Rate)
        Food = RndFoodPosition()
        
    }
}

export function Draw(Gameboard) {
    
    const FoodElement = document.createElement('div')
    FoodElement.style.gridRowStart = Food.y
    FoodElement.style.gridColumnStart = Food.x
    if ( rnd <= 5) {
        FoodElement.classList.add('Food1')
    }
    if (rnd <= 10 && rnd > 5) {
        FoodElement.classList.add('Food2')
    }
    if (rnd <= 15 && rnd > 10) {
        FoodElement.classList.add('Food3')
    }
    if (rnd <= 20 && rnd > 15) {
        FoodElement.classList.add('Food4')
    }
    Gameboard.appendChild(FoodElement)
}

function RndFoodPosition() {
    let NewFoodPosition
    while (NewFoodPosition == null || onSnake(NewFoodPosition)) {
        NewFoodPosition = RndGridPosition()
    }
    return NewFoodPosition
}

const range = 30, start = 1
function RndGridPosition() {


    return {
        x: Math.floor((Math.random() * range) + start),
        y: Math.floor((Math.random() * range) + start)
    }

}
const range1 = 20, start1 = 1
function RandomNum() {
    
    
    return Math.floor((Math.random() * range1) + start1)
    
}