export const arrowKeysHandlers = {
  ArrowUp({x, y}, step) {
    y -= step
    if (y < 0) y = 0
    return {x, y}
  },

  ArrowDown({x, y}, step, {height}, diameter) {
    y += step
    if (y > height - diameter) y = height - diameter
    return {x, y}
  },

  ArrowLeft({x, y}, step) {
    x -= step
    if (x < 0) x = 0
    return {x, y}
  },

  ArrowRight({x, y}, step, {width}, diameter) {
    x += step
    if (x > width - diameter) x = width - diameter
    return {x, y}
  },
}
