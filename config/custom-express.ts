import * as express from 'express'
import * as bodyParser from 'body-parser'
import routes from '../app/routes/routes'
import * as expressValidator from 'express-validator'

const consign = require('consign')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(expressValidator())

consign()
    .include('app')
    .into(app)

routes(app)

export default app