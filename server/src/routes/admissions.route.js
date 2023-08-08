import express from 'express';
import AdmissionsController from '../controllers/admissions.controller.js';


// Get an instance of Router
const router = express.Router();

// Route: /api/v1/admissions
router.get('/', AdmissionsController.getAllAdmissions);

// Export the router
export default router;

