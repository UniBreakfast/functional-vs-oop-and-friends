import config from './config.js'
import { fieldStyle } from './styles.js'

const { width, height, border } = config

export const field = {
  setUp(...items) {
    const el = document.createElement('div')

    Object.assign(el.style, fieldStyle)
    Object.assign(field, { el, items, width, height, border })
    items.forEach(item => (item.container = field))

    document.body.append(el)
    el.append(...items.map(item => item.el))
  },
}
