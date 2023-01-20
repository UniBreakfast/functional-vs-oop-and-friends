export { Ball }

import { ballStyle, glareStyle } from "./styles.js"



function Ball(parent, options = {}) {
  this.parent = parent
  this.options = options

  this.render()
}

Ball.prototype.render = function () {
  // create ball element
  const el = document.createElement('div')
  const innerEl = el.cloneNode()

  Object.assign(el.style, ballStyle)
  Object.assign(innerEl.style, glareStyle)
  Object.assign(this, { el })

  // add it to the DOM
  this.parent.appendChild(el).append(innerEl)
}

Ball.prototype.handle = function (key) {
  const keyHandler = this['handle' + key]

  if (keyHandler) this.moveWith(keyHandler)
}

Ball.prototype.moveWith = function (calcNewCoords) {
  const { offsetWidth: width, offsetHeight: height } = this.parent
  const { speed } = this

  const dimensions = { width, height }
  const coords = { x: this.x, y: this.y }

  Object.assign(this, calcNewCoords(coords, speed, dimensions, diameter))

  this.el.style.top = `${this.y}px`
  this.el.style.left = `${this.x}px`
}

Ball.prototype.handleArrowUp = function () {
  const { width, height } = dimensions
  const { x, y } = coords

  return {
    x: x,
    y: y - speed < 0 ? 0 : y - speed,
  }
}

class Ball {
  constructor () {}

  render () {}

  handle () {}

  moveWith () {}

  handleArrowUp () {}

  handleArrowDown () {}

  handleArrowLeft () {}

  handleArrowRight () {}
}



// ArrowUp({x, y}, step) {
//   y -= step
//   if (y < 0) y = 0
//   return {x, y}
// },

// ArrowDown({x, y}, step, {height}, diameter) {
//   y += step
//   if (y > height - diameter) y = height - diameter
//   return {x, y}
// },

// ArrowLeft({x, y}, step) {
//   x -= step
//   if (x < 0) x = 0
//   return {x, y}
// },

// ArrowRight({x, y}, step, {width}, diameter) {
//   x += step
//   if (x > width - diameter) x = width - diameter
//   return {x, y}
// },
