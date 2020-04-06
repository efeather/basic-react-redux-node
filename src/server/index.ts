import { isValidAuthToken, RoutePath } from '../common'
import * as express from 'express'
import * as path from 'path'
import * as compression from 'compression'
import { Request, Response } from 'express'
const httpShutdown = require('http-shutdown')
const HttpStatus = require('http-status-codes')
const app = express()

const packageJSON = require(path.join(__dirname, '..', '..', 'package.json'))

//Test the server directly just show version from package.json
app.get(RoutePath.webAPI, (req: Request, res: Response) => {
    const authToken: string | null = req.header('Authorization')

    if (!isValidAuthToken(authToken)) {
        res.status(HttpStatus.UNAUTHORIZED).send({ error: 'bad Auth Token' })
    } else {
        res.json({
            name: packageJSON.name,
            version: packageJSON.feature,
        })
    }
})

const publicDir = path.join(__dirname, '..', '..', 'public')
const clientRouter = express.Router()
clientRouter.use(compression())
clientRouter.use(express.static(publicDir))
clientRouter.get(
    new RegExp(`^(?!${RoutePath.webAPI}).*$`),
    (req: Request, res: Response) => {
        return res.sendFile(path.join(publicDir, 'index.html'))
    }
)

app.use(RoutePath.base, clientRouter)

const port = 8080
console.log(`Starting on Port ${port}`)
const server = httpShutdown(
    app.listen(port, () => {
        console.log(`Started on port ${port}`)

        process.on('SIGTERM', () => {
            console.log(`Shutting down`)
            server.close(() => {
                console.log(`Server closed`)
            })
        })
    })
)

server.host = `http://localhost:${port}`

module.exports = server
