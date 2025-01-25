const num = Math.ceil(Math.random() * 100)

let borderTop = 100
let borderBottom = 1

while (true) {
  const guess = Math.floor((borderTop + borderBottom) / 2)
  console.log(`Компьютер 2: Пробую число ${guess}.`)

  if (guess === num) {
    console.log("Компьютер 1: Угадал!")
    break
  }
  if (guess > num) {
    console.log("Компьютер 1: Меньше.\n")
    borderTop = guess-1
  }
  else {
    console.log("Компьютер 1: Больше.\n")
    borderBottom = guess+1
  }
}
