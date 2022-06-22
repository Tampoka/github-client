import * as http from 'http';
import * as url from 'url';

const PORT = 3000

export const getCode = () => {
    return new Promise((resolve, reject) => {
        http
            .createServer(function (req, res) {
                if (!req.url) {
                    return
                }
                const {code} = url.parse(req.url, true).query
                res.writeHead(200, {"Content-Type": "text/plain"})
                res.write(`The code is: ${code}`)
                res.end()
            })
            .listen(PORT)
    })
}