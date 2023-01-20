import config from './config.js'

const { width, height, border, diameter, x, y } = config

export const fieldStyle = {
  position: 'absolute',
  width: `${width}px`,
  height: `${height}px`,
  border: `${border}px solid brown`,
  backgroundColor: 'darkgreen',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}  

export const ballStyle = {
  position: 'absolute',
  width: `${diameter}px`,
  height: `${diameter}px`,
  borderRadius: '50%',
  backgroundColor: 'orange',
  top: `${y}px`,
  left: `${x}px`,
}

export const glareStyle = {
  position: 'absolute',
  width: `${diameter / 4}px`,
  height: `${diameter / 4}px`,
  borderRadius: '50%',
  backgroundColor: 'yellow',
  left: '25%',
  top: '15%',
}
