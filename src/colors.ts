
export const COLORS = {
  RESET: '\u001B[0m',
  BLACK: '\u001B[30m',
  RED: '\u001B[31m',
  GREEN: '\u001B[32m',
  YELLOW: '\u001B[33m',
  BLUE: '\u001B[34m',
  PURPLE: '\u001B[35m',
  CYAN: '\u001B[36m',
  WHITE: '\u001B[37m',
  GREY: '\u001B[90m',
  ERROR: '\u001B[91m',
  SUCCESS: '\u001B[92m',
  INFO: '\u001B[93m',
  VIOLET: '\u001B[94m',
  MAGENTA: '\u001B[95m',
  DONE: '\u001B[96m'
}

export const printTree = (COLOR: any, args: any) => {
  console.log(COLOR, "-", ...args, COLORS.RESET)
}

/**
 * @description
 * print full color text
 * @example 
 * print.colorful(`<MAGENTA>import <CYAN>knex <MAGENTA>from <YELLOW>'knex'`)
 */
export function colorful(text: string) {
  for (const key in COLORS) {
    const regexp = new RegExp('<' + key + '>', 'gmi')
    text = text.replace(regexp, COLORS[key.toUpperCase()])
  }
  text = text.replace(/({|})/g, COLORS.WHITE + '$1' + COLORS.RESET)
  console.log(text, COLORS.RESET)
}