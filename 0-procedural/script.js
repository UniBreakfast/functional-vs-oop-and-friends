const field = document.getElementById('field')
const ball = document.getElementById('ball')
const ballGlare = document.getElementById('glare')

const fieldWidth = 600
const fieldHeight = 600
const fieldBorder = 25
const ballDiameter = 50
const ballGlareDiameter = 12
const step = 10

let ballX = 130
let ballY = 400

//* prepare field
{
  // border, color, width, height, position
  field.style.border = fieldBorder + 'px solid lightgreen'
  field.style.boxSizing = 'content-box'
  field.style.backgroundColor = 'saddlebrown'
  field.style.width = fieldWidth + 'px'
  field.style.height = fieldHeight + 'px'
  field.style.position = 'absolute'
  field.style.left = '50%'
  field.style.top = '50%'
  field.style.transform = 'translate(-50%, -50%)'
}

//* prepare ball
{
  // color, diameter, position
  ball.style.backgroundColor = 'red'
  ball.style.width = ballDiameter + 'px'
  ball.style.height = ballDiameter + 'px'
  ball.style.borderRadius = '50%'
  ball.style.position = 'absolute'
  ball.style.left = ballX + 'px'
  ball.style.top = ballY + 'px'
}

//* prepare ball glare
{
  // color, diameter, position
  ballGlare.style.backgroundColor = 'pink'
  ballGlare.style.width = ballGlareDiameter + 'px'
  ballGlare.style.height = ballGlareDiameter + 'px'
  ballGlare.style.borderRadius = '50%'
  ballGlare.style.position = 'absolute'
  ballGlare.style.left = '25%'
  ballGlare.style.top = '15%'
}

//* take control of ball with arrow keys
//* limit ball movement to field
onkeydown = function ({key}) {
  if (key === 'ArrowUp') {
    ballY = Math.max(ballY - step, 0)
    ball.style.top = ballY + 'px'
  }
  else if (key === 'ArrowDown') {
    ballY = Math.min(ballY + step, fieldHeight - ballDiameter)
    ball.style.top = ballY + 'px'
  }
  else if (key === 'ArrowLeft') {
    ballX = Math.max(ballX - step, 0)
    ball.style.left = ballX + 'px'
  }
  else if (key === 'ArrowRight') {
    ballX = Math.min(ballX + step, fieldWidth - ballDiameter)
    ball.style.left = ballX + 'px'
  }
}
