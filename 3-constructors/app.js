import { Field } from './field.js'
import { Ball } from './ball.js'
import config from './config.js'

const { width, height, border, diameter, x, y, speed  } = config

const field = new Field(document.body, {width, height, border})
const ball = new Ball(field.el, {diameter, x, y, speed})

window.addEventListener('keydown', e => ball.handle(e.key))
