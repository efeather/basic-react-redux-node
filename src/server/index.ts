import { isValidAuthToken, RoutePath } from '../common'
import * as path from 'path'
import * as compression from 'compression'
import * as express from 'express'
import { Request, Response } from 'express'
import * as https from 'https'
import * as http from 'http'
const httpShutdown = require('http-shutdown')
const HttpStatus = require('http-status-codes')
const appBase = express()
const httpServer = http.createServer(appBase)
const wsServer = http.createServer(appBase)
const app = require('express-ws')(appBase, wsServer).app

const packageJSON = require(path.join(__dirname, '..', '..', 'package.json'))

app.ws('/echo', function(ws: any, req: Request) {
    ws.on('message', function(msg: string) {
        console.log(msg)
        ws.send(`........`)
    })
})

//Test the server directly just show version from package.json
//HTTP requests
app.get(RoutePath.webAPI, (req: Request, res: Response) => {
    const authToken: string | undefined = req.header('Authorization')

    if (!isValidAuthToken(authToken)) {
        res.status(HttpStatus.UNAUTHORIZED).send({ error: 'bad Auth Token' })
    } else {
        res.json({
            name: packageJSON.name,
            version: packageJSON.feature,
        })
    }
})

app.get(RoutePath.test1, (req: Request, res: Response) => {
    res.json({
        name: 'test1',
    })
})

const publicDir = path.join(__dirname, '..', '..', 'public')
const clientRouter = express.Router()
clientRouter.use(compression())
clientRouter.use(express.static(publicDir))
//Matches any base route and sub paths
clientRouter.get(
    new RegExp(`^(?!${RoutePath.webAPI}).*$`),
    (req: Request, res: Response) => {
        return res.sendFile(path.join(publicDir, 'index.html'))
    }
)

app.use(RoutePath.base, clientRouter)

const httpPort = 8080
const wsPort = 8085

const server = httpShutdown(
    httpServer.listen(httpPort, () => {
        console.log(`HTTP Started on port ${httpPort}`)

        process.on('SIGTERM', () => {
            console.log(`Shutting down`)
            server.close(() => {
                console.log(`Server closed`)
            })
        })
    })
)

wsServer.listen(wsPort, () => {
    console.log(`WS Started on port ${wsPort}`)
})
server.host = `http://localhost:${httpPort}`

module.exports = server
