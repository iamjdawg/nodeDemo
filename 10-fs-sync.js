const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/result.txt',
    `here is the result: ${first}, ${second}`
)

// if you also add a {flag : 'a'} option then instead of overwriting it will append the existing file