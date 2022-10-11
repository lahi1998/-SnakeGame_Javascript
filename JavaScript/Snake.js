import { GetInputDirection} from "./Input.js"

export const Snake_Speed = 5
const SnakeBody = [{ x: 15, y: 12 }]
let newSegments = 0

export function Update() {
    addSegments()
    const inputDirection = GetInputDirection()
    for (let i = SnakeBody.length - 2; i >= 0; i--) {
        SnakeBody[i + 1] = { ...SnakeBody[i] }
    }

    SnakeBody[0].x += inputDirection.x
    SnakeBody[0].y += inputDirection.y


}

export function Draw(Gameboard) {

    SnakeBody.forEach(segment => {
        const SnakeElement = document.createElement('div')
        SnakeElement.style.gridRowStart = segment.y
        SnakeElement.style.gridColumnStart = segment.x
        SnakeElement.classList.add('Snake')
        Gameboard.appendChild(SnakeElement)
    })
    
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return SnakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}


export function GetSnakeHead() {
    return SnakeBody[0]
}

export function SnakeIntersection() {
    return onSnake(SnakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        SnakeBody.push({ ...SnakeBody[SnakeBody.length - 1] })
    }

    newSegments = 0
}