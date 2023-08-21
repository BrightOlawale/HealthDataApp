import Emar from '../models/emar.model.js';

// Create emar controller class
export default class EmarController {
    // Create static method to get all emar
    static async getAllEmar(req, res) {
        try {
            // Implement Pagination
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;

            const allEmar = await Emar.findAll({
                limit: limit,
                offset: offset
            });
            res.status(200).json({
                message: 'All emar fetched successfully',
                emar: allEmar
            });
        } catch (error) {
            res.status(500).json({
                error: error
            });
        }
    }
}