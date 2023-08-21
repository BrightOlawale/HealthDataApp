import Poe from '../models/poe.model.js';

// Create poe controller class
export default class PoeController {
    // Create static method to get all poe
    static async getAllPoe(req, res) {
        try {
            // Implement Pagination
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;

            const allPoe = await Poe.findAll({
                limit: limit,
                offset: offset
            });
            res.status(200).json({
                message: 'All poe fetched successfully',
                poe: allPoe
            });
        } catch (error) {
            res.status(500).json({
                error: error
            });
        }
    }
}