import app from './server.js'
import sequelize from './config/db.config.js'
import dotenv from 'dotenv'
// import  AdmissionDAO from './src/dao/admissionDAO.js'

// Main function to start the server and connect to the database 
async function main() {
    // Load environment variables from .env file
    dotenv.config()

    // Create a connection to the database
    try {
        await sequelize.authenticate()
        console.log('Connection to the database has been established successfully.')
    }
    catch (error) {
        console.error('Unable to connect to the database:', error)
    }

    // Start the server
    try {
        const port = process.env.PORT || 5000
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    }
    catch (error) {
        console.error(error)
    }
}

// Call the main function
main()