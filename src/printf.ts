/**
 * 
 * @description 
 * print same line - only development not production
 */
const printf = (...args: any) => {
  if (process.env.NODE_ENV?.indexOf('prod') !== -1) {
    for (const key in args) {
      if (typeof args[key] === 'object') {
        args[key] = JSON.stringify(args[key], null, 2)
      }
    }
    process.stdout.write(args.join(' ') + ' '.repeat(15) + '\r')
  }
}

export default printf