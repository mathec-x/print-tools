import printf from "./printf";

/**
 * @example
 * await print.delay(3000)
 * 
 * @description sleep program in a few miliseconds
 */
const delay = (ms: number, showtimer = true): Promise<void> => new Promise(resolve => {
  let seconds = (ms / 1000) - 1,
    timer: NodeJS.Timer

  if (showtimer) {
    printf(' - awaiting: ' + seconds + 's')
    timer = setInterval(() => {
      --seconds
      printf(' - awaiting: ' + seconds + 's')
    }, 1000)
  }

  setTimeout(() => {
    printf(' - resolved: ' + (ms / 1000) + 's')
    if (timer) {
      clearInterval(timer)
    }
    resolve()
  }, ms)
})

export default delay