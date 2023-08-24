import routeSetup from './setup.route.js';
import DiagnosisIcdController from '../controllers/diagnosis_icd.controller.js';

// Route: /api/v1/diagnosis_icd
routeSetup.get('/', DiagnosisIcdController.getAllDiagnosis);

// Export the router
export default routeSetup;