import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './employees/routes'
import './db'

const api = express()

const corsConfig = {
  origin: ['http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}

api.use(cors(corsConfig))
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))

routes(api)

api.listen('3000', () => {
  console.log('Server running at http://localhost:3000');
})