import sequelize from "../config/db.config";
import Sequelize from 'sequelize'

const Diagnosis_ICD = sequelize.define('diagnosis_icd', {
    Patient_ID: {
        type: Sequelize.INTEGER
    },
    Admission_ID: {
        type: Sequelize.INTEGER
    },
    seq_num: {
        type: Sequelize.INTEGER
    },
    Icd_Code: {
        type: Sequelize.STRING
    },
    Icd_Version: {
        type: Sequelize.INTEGER
    },
})

export default Diagnosis_ICD