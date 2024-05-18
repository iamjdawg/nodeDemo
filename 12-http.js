const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to the home page')
    }
    if (req.url === '/about') {
        res.end('here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>we cannot find the page you're looking for</p>
    <a href="/">back home</a>
    `)
})
server.listen(9500)