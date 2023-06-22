import {AccountsService} from "../service/account.service";
import {Request, Response} from "express";
import {ApiError} from "../../../common/exceptions/api-error";

const accountsService = new AccountsService();

export class AccountsController {
    public async findAll(req: Request, res: Response) {
        try {
            res.json(await accountsService.findAll());
        } catch (error: any) {
            res.status(error.status).send(error.message);
        }
    }

    public async findOne(req: Request, res: Response) {
        try {
            const {id} = req.params;
            if (!id) throw ApiError.BadRequest("ID is required");
            res.json(await accountsService.findOne(id));
        } catch (error: any) {
            res.status(error.status).send(error.message);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const { name, ownerId } = req.body;
            if (!name || !ownerId) throw ApiError.BadRequest('Name and Owner is required')

            const account = await accountsService.create(name, ownerId);
            res.json(account);
        } catch (error: any) {
            res.status(error.status).send(error.message);
        }
    }

    public async removeOne(req: Request, res: Response) {
        try {
            const {id} = req.params;
            if (!id) throw ApiError.BadRequest("ID is required");
            res.json(await accountsService.removeOne(id));
        } catch (error: any) {
            res.status(error.status).send(error.message);
        }
    }
}