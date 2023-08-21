import Diagnosis from '../models/diagnosis_icd.model.js';

// Create diagnosis controller class
export default class DiagnosisController {
    // Create static method to get all diagnosis
    static async getAllDiagnosis(req, res) {
        try {
            // Implement Pagination
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;

            const allDiagnosis = await Diagnosis.findAll({
                limit: limit,
                offset: offset
            });
            res.status(200).json({
                message: 'All diagnosis fetched successfully',
                diagnosis: allDiagnosis
            });
        } catch (error) {
            res.status(500).json({
                error: error
            });
        }
    }
}
