function createLogger() {
  const arr = []

  return {
    log(message) {
      arr.push(message)
    },
    getLogs() {
      return arr
    }
  }
}

function createRandomGenerator(min, max) {
  return () => Math.random() * (max - min) + min
}
