export { Field }

import { fieldStyle } from './styles.js'

function Field(parent, options = {}) {
  this.parent = parent
  this.options = options 

  this.render()
}

Field.prototype.render = function () {
  const el = document.createElement('div')

  Object.assign(el.style, fieldStyle)
  Object.assign(this, { el })

  this.parent.append(el)
}
