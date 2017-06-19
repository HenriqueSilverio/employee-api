import mongoose from 'mongoose'
import config from './config'

const db  = mongoose.connection
const env = process.env.NODE_ENV || 'development'
const uri = config.db[env]

mongoose.Promise = global.Promise;

mongoose.connect(uri)

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
  console.log('Connected to database!');
})