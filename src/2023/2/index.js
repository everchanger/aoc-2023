async function taskA (input) {

  const rules = {
    'red': 12,
    'green': 13,
    'blue': 14
  }

  let possibleIdSum = 0
  const games = input.split('\n')

  games.filter((game, gameIndex) => {
    const sets = game.split(': ')[1].split('; ')
    for (const set of sets) {
      const cubes = set.split(', ')

      for (const cube of cubes) {
        const parsed = cube.split(' ')
        const value = parsed[0]
        const color = parsed[1]

        if (value > rules[color]) {
          return false
        }
      }
    }
    possibleIdSum += gameIndex + 1
    return true
  })

  return possibleIdSum
}

async function taskB (input) {
  return ''
}

export { taskA, taskB }
