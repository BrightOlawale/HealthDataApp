import sequelize  from '../config/db.config.js'
import Sequelize from 'sequelize'

const Admission = sequelize.define('Admission', {
    Patient_ID: {
        type: Sequelize.INTEGER
    },
    Admission_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Admission_Date: {
        type: Sequelize.DATE
    },
    Admission_Time: {
        type: Sequelize.TIME
    },
    Discharge_Date: {
        type: Sequelize.DATE
    },
    Discharge_Time: {
        type: Sequelize.TIME
    },
    Death_Date: {
        type: Sequelize.DATE
    },
    Death_Time: {
        type: Sequelize.TIME
    },
    Admission_Type: {
        type: Sequelize.STRING
    },
    Admission_Location: {
        type: Sequelize.STRING
    },
    Discharge_Location: {
        type: Sequelize.STRING
    },
    Insurance: {
        type: Sequelize.STRING
    },
    Language: {
        type: Sequelize.STRING
    },
    Marital_Status: {
        type: Sequelize.STRING
    },
    Patient_Race: {
        type: Sequelize.STRING
    },
    Hospital_expire_flag: {
        type: Sequelize.STRING
    },
    Registered_Date: {
        type: Sequelize.DATE
    },
    Registered_Time: {
        type: Sequelize.TIME
    },
    Discharge_Date: {
        type: Sequelize.DATE
    },
    Discharge_Time: {
        type: Sequelize.TIME
    }
},
{
    timestamps: false,
}
)

export default Admission