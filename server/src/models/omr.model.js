import sequelize from "../config/db.config";
import Sequelize from 'sequelize'

const Omr = sequelize.define('omr', {
    Patient_ID: {
        type: Sequelize.INTEGER
    },
    Chart_Date: {
        type: Sequelize.DATE
    },
    Seq_Num: {
        type: Sequelize.INTEGER
    },
    result_name: {
        type: Sequelize.STRING
    },
    result_value: {
        type: Sequelize.STRING
    }
})
