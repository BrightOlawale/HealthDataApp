import sequelize from '../config/db.config.js'
import Sequelize from 'sequelize'

const Poe = sequelize.define('filtered_poe', {
    Poe_ID: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Poe_Seq: {
        type: Sequelize.INTEGER
    },
    Patient_ID: {
        type: Sequelize.INTEGER
    },
    Admission_ID: {
        type: Sequelize.INTEGER
    },
    Order_Time:{
        type: Sequelize.DATE
    },
    Order_Type: {
        type: Sequelize.STRING
    },
    Order_Subtype: {
        type: Sequelize.STRING
    },
    Transaction_Type: {
        type: Sequelize.STRING
    },
    Discontinue_Of_Poe_ID: {
        type: Sequelize.STRING
    },
    Discontinue_By_Poe_ID: {
        type: Sequelize.STRING
    },
    Order_Status: {
        type: Sequelize.STRING
    }
},
{
    timestamps: false
}
)

export default Poe