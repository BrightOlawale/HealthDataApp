import Sequelize from 'sequelize'
import config from '../config.js'
import tedious from 'tedious'

// Create a connection configuration object and use windows authentication
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.server,
    dialect: 'mssql',
    dialectModule: tedious,
    port: config.port,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})
// Export the connection object
export default sequelize
