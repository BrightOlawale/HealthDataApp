import Patients from '../models/patients.model.js';

// Create patients controller class
export default class PatientsController {
    // Create a static method to get all patients
    static async getAllPatients(req, res) {
        try {
            // Implement Pagination
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;

            const allPatients = await Patients.findAll({
                limit: limit,
                offset: offset
            });
            res.status(200).json({
                message: 'All patients fetched successfully',
                patients: allPatients
            });
        } catch (error) {
            res.status(500).json({
                error: error
            });
        }
    }
}