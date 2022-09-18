import ask from './ask';
import { colorful, COLORS, printTree } from './colors';
import delay from './delay';
import Dir from './dir';
import printf from './printf';

export const print = {
  black: (...args: any) => printTree(COLORS.BLACK, args),
  blue: (...args: any) => printTree(COLORS.BLUE, args),
  cyan: (...args: any) => printTree(COLORS.CYAN, args),
  purple: (...args: any) => printTree(COLORS.PURPLE, args),
  green: (...args: any) => printTree(COLORS.GREEN, args),
  grey: (...args: any) => printTree(COLORS.GREY, args),
  magenta: (...args: any) => printTree(COLORS.MAGENTA, args),
  red: (...args: any) => printTree(COLORS.RED, args),
  violet: (...args: any) => printTree(COLORS.VIOLET, args),
  yellow: (...args: any) => printTree(COLORS.YELLOW, args),
  white: (...args: any) => printTree(COLORS.WHITE, args),
  success: (...args: any) => printTree(COLORS.SUCCESS, args),
  done: (...args: any) => printTree(COLORS.DONE, args),
  info: (...args: any) => printTree(COLORS.INFO, args),
  error: (...args: any) => printTree(COLORS.ERROR, args),
  ln: () => console.log(''),
  colorful: colorful,
  ask: ask,
  delay: delay,
  f: printf,
  dir: Dir
}