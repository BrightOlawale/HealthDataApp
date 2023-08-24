import routeSetup from './setup.route.js';
import PatientsController from '../controllers/patients.controller.js';

// Route: /api/v1/patients
routeSetup.get('/', PatientsController.getAllPatients);

// Export the router
export default routeSetup;