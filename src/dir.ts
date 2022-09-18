import fs from 'fs'
import pt from 'path'
import { COLORS, printTree } from './colors';

export default class Dir {
  stream: fs.WriteStream;
  counter = 0;
  path: string;
  type: 'array' | 'object'
  /**
   * @description 
   * Caches any object into writeble file
   *
   * @example
   * const log = new Dir('logs/test');
   * rows.map(row => {
   *    log.add(row);
   * })
   * log.close();
   * 
   * @constructor @example
   * new Dir('{cwd}/logs/test')
   * new Dir('/tmp/logs/test')
   * new Dir('./logs/test')
   * 
   */
  constructor(path: string, type: 'array' | 'object' = 'array') {
    const filename = path
      .replace('{cwd}', process.cwd())
      .replace(/\.[^/.]+$/, '') + '.json'


    this.path = filename[0] === '/' ? filename : pt.join(pt.dirname(require.main.filename), filename)

    printTree(COLORS.GREY, [`[print.dir] open: ${this.path.replace(process.cwd(), '.')}`])

    if (!fs.existsSync(pt.dirname(this.path))) {
      fs.mkdirSync(pt.dirname(this.path))
    }

    this.type = type
    this.stream = fs.createWriteStream(this.path, 'utf-8')
    this.stream.write(this.type === 'array' ? '[' : '{')
  }

  add = (object: { [key: string]: any }) => {
    this.counter++
    this.stream.write((this.counter > 1 ? ',' : '') + JSON.stringify(object, null, 2))
  }

  close = () => {
    this.stream.write(this.type === 'array' ? ']' : '}')
    this.stream.close()
    printTree(COLORS.GREY, ['[print.dir] closed'])
  }

  unlink = () => {
    printTree(COLORS.GREY, [`[print.dir] unlinked: ${this.path.replace(process.cwd(), '.')}`])
    fs.unlinkSync(this.path)
  }
  count = () => this.counter;
}