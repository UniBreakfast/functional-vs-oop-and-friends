import { ball } from './ball.js'
import { field } from './field.js'

ball.setUp() 
field.setUp(ball)

window.addEventListener('keydown', e => ball.handle(e.key))
