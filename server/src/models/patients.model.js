import sequelize from "../config/db.config";
import Sequelize from 'sequelize'

const Patients = sequelize.define('Patients', {
    Patient_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },  
    Gender: {
        type: Sequelize.STRING
    },
    Patient_Age: {
        type: Sequelize.INTEGER
    },
    Anchor_Year: {
        type: Sequelize.INTEGER
    },
    Anchor_Years_Group: {
        type: Sequelize.STRING
    },
    Date_of_Death: {
        type: Sequelize.DATE
    }
})

export default Patients