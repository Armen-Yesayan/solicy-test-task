import {Router} from "express";
import {AccountsController} from "../../modules/accounts/controller/accounts.controller";
import {OwnersController} from "../../modules/owners/controller/owners.controller";

const router = Router();
const ownersController = new OwnersController();

router.get('/', ownersController.findAll)

export default router;