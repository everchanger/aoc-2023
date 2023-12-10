const sumRows = (rows) => {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  let sum = 0
  for (const row of rows) {
    let number = ''
    
    for (const letter of row) {
      if (digits.includes(letter)) {
        number += letter;
        break;
      }
    }

    // Search from the end
    for (let i = row.length - 1; i >= 0; i--) {
      const letter = row[i]
      if (digits.includes(letter)) {
        number += letter;
        break;
      }
    }

    sum += +number
  }  
  return sum
}

async function taskA (input) {
  return sumRows(input.split('\n'))
}

const sumRowsB = (rows) => {
  const needles = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numMap = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  };

  let sum = 0
  for (const row of rows) {
    let number = ''
    let start = 1000
    let lowIndex = -1

    let end = -1000
    let highIndex = -1

    for (const needle of needles) {
      const firstIndex = row.indexOf(needle)
      const lastIndex = row.lastIndexOf(needle)

      if (firstIndex!== -1 && firstIndex < start) {
        lowIndex = needle
        start = firstIndex;
      }

      if (lastIndex!== -1 && lastIndex > end) {
        highIndex = needle
        end = lastIndex
      }
    }

    const startValue = numMap[lowIndex] || +lowIndex
    const endValue = numMap[highIndex] || +highIndex
    const concat = '' + startValue + endValue

    sum += +(concat)
  }
  return sum
}

async function taskB (input) {
  return sumRowsB(input.split('\n'))
}

export { taskA, taskB }
