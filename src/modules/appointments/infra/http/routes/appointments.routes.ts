import { Router } from 'express';

import ensureAuthenicated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenicated);
appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
