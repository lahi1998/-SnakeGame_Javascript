let InputDirection = { x: 0, y: 0 }
let LastInputDirection = { x: 0, y: 0 }

/* mobile controls */

// Get element
const controller = document.getElementById('Controller');
// Get buttons
const up = document.getElementById('GoUp');
const left = document.getElementById('Left')
const right = document.getElementById('Right')
const down = document.getElementById('Down')
const mobil = document.getElementById('Mobil')

// On button click executes funtion
up.addEventListener('click', Up)
left.addEventListener('click', Left)
right.addEventListener('click', Right)
down.addEventListener('click', Down)
mobil.addEventListener('click', Mobil)

function Up() {
    if (LastInputDirection.y == 0) {
        InputDirection = { x: 0, y: -1 }
    }
}
function Left() {
    if (LastInputDirection.x == 0) {
        InputDirection = { x: -1, y: 0 }
    }
}
function Right() {
    if (LastInputDirection.x == 0) {
        InputDirection = { x: 1, y: 0 }
    }
}
function Down() {
    if (LastInputDirection.y == 0) {
        return InputDirection = { x: 0, y: 1 }
    }
}
function Mobil() {
    controller.style.display = 'block';
    mobil.style.display = 'None'
}

/* pc controlls */
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (LastInputDirection.y !== 0) break
            InputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (LastInputDirection.y !== 0) break
            InputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (LastInputDirection.x !== 0) break
            InputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (LastInputDirection.x !== 0) break
            InputDirection = { x: 1, y: 0 }
            break
    }
})


export function GetInputDirection() {
    LastInputDirection = InputDirection
    return InputDirection
}