import Admissions from '../models/admissions.model.js'

// Create admsission controller class
export default class AdmissionsController {
    // Create a static method to get all admissions
    static async getAllAdmissions(req, res) {
        try {
            // Implement Pagination
            const page = parseInt(req.query.page) || 1
            const limit = parseInt(req.query.limit) || 10
            const offset = (page - 1) * limit

            const allAdmissions = await Admissions.findAll({
                limit: limit,
                offset: offset
            })
            res.status(200).json({
                message: 'All admissions fetched successfully',
                admissions: allAdmissions
            })
        } catch (error) {
            res.status(500).json({
                error: error
            })
        }
    }

    // Get an admission record by patient id
    static async getAdmissionByPatientId(req, res) {
        try {
            const admission = await Admissions.findOne({
                where: {
                    Patient_ID: req.params.patient_id
                }
            })
            res.status(200).json({
                message: 'Admission fetched successfully',
                admission: admission
            })
        } catch (error) {
            res.status(500).json({
                error: error
            })
        }
    }
}