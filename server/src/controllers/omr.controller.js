import Omr from '../models/omr.model';

// Create omr controller class
export default class OmrController {
    // Create static method to get all omr
    static async getAllOmr(req, res) {
        try {
            // Implement Pagination
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;

            const allOmr = await Omr.findAll({
                limit: limit,
                offset: offset
            });
            res.status(200).json({
                message: 'All omr fetched successfully',
                omr: allOmr
            });
        } catch (error) {
            res.status(500).json({
                error: error
            });
        }
    }
}