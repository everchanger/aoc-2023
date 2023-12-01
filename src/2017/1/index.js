async function taskA (input) {
  return input.split('\r\n').map(Number).reduce((a, b) => a + b, 0)
}

async function taskB (input) {
  return ''
}

export { taskA, taskB }
