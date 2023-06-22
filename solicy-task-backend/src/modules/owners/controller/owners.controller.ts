import {Request, Response} from "express";
import {OwnersService} from "../service/owners.service";

const ownersService = new OwnersService();

export class OwnersController {
    public async findAll(req: Request, res: Response) {
        try {
            res.json(await ownersService.findAll());
        } catch (error: any) {
            res.status(error.status).send(error.message);
        }
    }
}