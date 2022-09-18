import readline from 'readline';

/**
 * @description ask a question, answer yes or not, returns true or false
 */
 const ask = (query: string): Promise<boolean> => new Promise((resolve, reject) => {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const exit = () => {
    reject('exited code SIGINT')
    rl.close()
  }

  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }

  process.stdout.write(` - ${query} (y/n): `)
  process.stdin.on('keypress', (str) => {
    const value = str.toLowerCase().startsWith('y') ? true : false
    console.log(' -', value ? 'Ok' : 'Nop')
    resolve(value)
    rl.close()
  });

  rl.on('SIGINT', exit)
  rl.on('SIGCONT', exit)
  rl.on('SIGTSTP', exit)
})

export default ask