const { print } = require('../dist')
print.ln()

/**
 * @description
 * print full color text
 */
print.colorful(`<MAGENTA>import { <CYAN>print } <MAGENTA>from <YELLOW>'print-tools'`)

/**
 * @description
 * I'm a empty line
 */
print.ln()

// colors
print.black("I'M BLACK")
print.blue("I'M BLUE")
print.cyan("I'M CYAN")
print.purple("I'M PURPLE")
print.green("I'M GREEN")
print.grey("I'M GREY")
print.magenta("I'M MAGENTA")
print.red("I'M RED")
print.violet("I'M VIOLET")
print.yellow("I'M YELLOW")
print.white("I'M WHITE")
print.success("I'M LIGHT GREEN")
print.done("I'M LIGHT CYAN")
print.info("I'M LIGHT YELLOW")
print.error("I'M LIGHT RED")

/**
 * async tools
 */
async function main() {
  for (let index = 0; index < 10; index++) {
    /**
     * @description
     * I'm allways in the same line
     */
    print.f(` - I'm always on the same line ${index}`)

    /**
     * @description
     * wait 1 second to continue
     * params false to no timer
     */
    await print.delay(255, false)
  }

  /**
   * @description
   * ask a question, answer yes or not, returns true or false
   */
  const qs = await print.ask('Deseja Continuar?')
  print.magenta('choice is: ', qs)


  /**
   * @description
   * Caches any object into writeble file 
   */
  const log = new print.dir('log'); // create a streaming interface json file
  [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }].forEach(async (row) => {
    log.add(row);

    /**
     * @description
     * wait 1 second to continue
     * stopwatch to end in seconds
     */
    await print.delay(3000) // wait 3 seconds to continue
  })
  log.close();

  await print.delay(5000) // wait 5 seconds to continue
  log.unlink();

  print.ln()
}

main()