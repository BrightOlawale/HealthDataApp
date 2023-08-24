import routeSetup from './setup.route.js';
import PoeController from '../controllers/poe.controller.js';

// Route: /api/v1/poe
routeSetup.get('/', PoeController.getAllPoe);

// Export the router
export default routeSetup;