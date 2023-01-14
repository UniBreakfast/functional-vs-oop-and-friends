const fieldEl = document.getElementById('field')
const ballEl = document.getElementById('ball')
const ballGlare = document.getElementById('glare')

const ball = { x: 200, y: 300, diameter: 50 }
const field = { width: 600, height: 600 }



//* prepare field
prepareField(fieldEl, field.width, field.height, 25, 'saddlebrown', 'lightgreen', true)

//* prepare ball
prepareBall(ballEl, ball.diameter, 12, 'blue', 'cyan')
moveTo(ballEl, ball.x, ball.y)

//* take control of ball with arrow keys
//* limit ball movement to field
handleKeydown(ballEl, ball).on(field, 5)



function prepareField(field, width, height, border, bgColor, borderColor, center) {
  field.style = `
    width: ${width}px;
    height: ${height}px;
    border: ${border}px solid ${borderColor};
    background-color: ${bgColor};
  ` + (center ? `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  ` : '')
}

function prepareBall(ball, diameter, glareDiameter, color, glareColor) {
  ball.style = `
    width: ${diameter}px;
    height: ${diameter}px;
    border-radius: 50%;
    background-color: ${color};
    position: absolute;
  `
  ballGlare.style = `
    width: ${glareDiameter}px;
    height: ${glareDiameter}px;
    border-radius: 50%;
    background-color: ${glareColor};
    position: absolute;
    left: 25%;
    top: 15%;
  `
}

function moveTo(element, x, y) {
  element.style.left = x + 'px'
  element.style.top = y + 'px'
}

function handleKeydown(el, item) {
  const {diameter} = item

  return {
    on({width, height}, step) {
      addEventListener('keydown', (e) => {
        if (isArrow(e.key)) {
          updateCoords(item, getSide(e.key), step)
          normalizeCoords(item, width, height, diameter)
          moveTo(el, item.x, item.y)
        }
      })
    }
  }
}

function isArrow(key) {
  return ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)
}

function getSide(key) {
  return key.replace('Arrow', '').toLowerCase()
}

function updateCoords(item, side, step) {
  item[getCoord(side)] += getSign(side) * step
}

function normalizeCoords(item, width, height, diameter) {
  if (item.x < 0) item.x = 0
  if (item.y < 0) item.y = 0
  if (item.x > width - diameter) item.x = width - diameter
  if (item.y > height - diameter) item.y = height - diameter
}

function getCoord(side) {
  return side === 'up' || side === 'down' ? 'y' : 'x'
}

function getSign(side) {
  return side === 'up' || side === 'left' ? -1 : 1
}
