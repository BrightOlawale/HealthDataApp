import routeSetup from "./setup.route.js";
import EmarController from "../controllers/emar.controller.js";

// Route: /api/v1/emar
routeSetup.get("/", EmarController.getAllEmar);

// Export the router
export default routeSetup;