import config from './config.js'
import { ballStyle, glareStyle } from './styles.js'
import { arrowKeysHandlers } from './handlers.js'

const { diameter, x, y, speed } = config

export const ball = {
  setUp() {
    // create ball element
    const el = document.createElement('div')
    const innerEl = el.cloneNode()

    Object.assign(el.style, ballStyle)
    Object.assign(innerEl.style, glareStyle)
    Object.assign(ball, { el, diameter, x, y, speed })

    // add it to the DOM
    document.body.appendChild(el).append(innerEl)
  },

  handle(key) {
    const keyHandler = arrowKeysHandlers[key]

    if (keyHandler) ball.moveWith(keyHandler)
  },

  moveWith(calcNewCoords) {
    const { width, height } = ball.container
    const { speed } = ball

    const dimensions = { width, height }
    const coords = { x: ball.x, y: ball.y }

    Object.assign(ball, calcNewCoords(coords, speed, dimensions, diameter))

    ball.el.style.top = `${ball.y}px`
    ball.el.style.left = `${ball.x}px`
  },
}
