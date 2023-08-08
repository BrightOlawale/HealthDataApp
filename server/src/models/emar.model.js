import sequelize from "../config/db.config";
import Sequelize from 'sequelize'

const Emar = sequelize.define('emar_filtered', {
    Patient_ID: {
        type: Sequelize.INTEGER
    },
    Admission_ID: {
        type: Sequelize.INTEGER
    },
    Emar_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Emar_Seq: {
        type: Sequelize.INTEGER
    },
    Poe_ID: {
        type: Sequelize.STRING
    },
    Pharmacy_ID: {
        type: Sequelize.INTEGER
    },
    Chart_Time: {
        type: Sequelize.DATE
    },
    Medication: {
        type: Sequelize.STRING
    },
    Event: {
        type: Sequelize.STRING
    },
    Schedule_Time: {
        type: Sequelize.TIME
    }
})

export default Emar