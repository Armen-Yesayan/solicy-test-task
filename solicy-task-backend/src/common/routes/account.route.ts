import {Router} from "express";
import {AccountsController} from "../../modules/accounts/controller/accounts.controller";

const router = Router();
const accountsController = new AccountsController();

router.get('/', accountsController.findAll)
router.get('/:id', accountsController.findOne)
router.post('/', accountsController.create)
router.delete('/:id', accountsController.removeOne)

export default router;