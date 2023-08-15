import express, { urlencoded } from 'express'
import cors from 'cors'
import Admissions from './routes/admissions.route.js'
import Emar from './routes/emar.route.js'
import Poe from './routes/poe.route.js'
import Omr from './routes/omr.route.js'
import Patient from './routes/patients.route.js'
import Diagnosis from './routes/diagnosis_icd.route.js'

// Create Instance of an app
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes 
app.use('/api/v1/admissions', Admissions)
app.use('/api/v1/emar', Emar)
app.use('/api/v1/poe', Poe)
app.use('/api/v1/omr', Omr)
app.use('/api/v1/patients', Patient)
app.use('/api/v1/diagnosis', Diagnosis)

// Wildcard route
app.use("*", (req, res) => {
    res.status(400).json({
        error: "Not Found"
    })
})

export default app;