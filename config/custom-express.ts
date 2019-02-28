import * as express from 'express'
import * as bodyParser from 'body-parser'
import routes from '../app/routes/routes'

const consign:any = require('consign')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

consign()
    .include('app')
    .into(app)

routes(app)

export default app