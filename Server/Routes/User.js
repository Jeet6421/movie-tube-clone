import express from 'express';
import {login, addPoints} from '../Controllers/Auth.js'; // Added addPoints
import { updatechaneldata, getallchanels } from '../Controllers/channel.js';
import auth from '../middleware/auth.js'; // Added auth middleware
const routes = express.Router();

routes.post('/login', login);
routes.patch('/update/:id', updatechaneldata); // Assuming this also needs auth, but not changing for this task
routes.get('/getallchannel', getallchanels);

// New route for adding points
routes.post('/add-points', auth, addPoints);

export default routes;