import {Router} from "express";
import accountRoute from "./account.route";
import ownersRoute from "./owners.route";
const router = Router();

router.use('/accounts', accountRoute);
router.use('/owners', ownersRoute);

export default router;