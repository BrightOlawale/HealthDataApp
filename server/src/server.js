import express, { urlencoded } from 'express'
import cors from 'cors'
import Admissions from './routes/admissions.route.js'

// Create Instance of an app
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes 
app.use('/api/v1/admissions', Admissions)

// Wildcard route
app.use("*", (req, res) => {
    res.status(400).json({
        error: "Not Found"
    })
})

export default app;