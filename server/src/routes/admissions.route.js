import routeSetup from './setup.route.js';
import AdmissionsController from '../controllers/admissions.controller.js';

// Route: /api/v1/admissions
routeSetup.get('/', AdmissionsController.getAllAdmissions);
// Route /api/v1/admissions/:id
routeSetup.get('/:id', AdmissionsController.getAdmissionByPatientId);

// Export the router
export default routeSetup;

