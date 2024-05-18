const path = require('path')
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath) // joins the absolute path


const base = path.basename(filePath)
console.log(base) // outputs only the base root

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') // gives the absolute path to the file
console.log(absolute)