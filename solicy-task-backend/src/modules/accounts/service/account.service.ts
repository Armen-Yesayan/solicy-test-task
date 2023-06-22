import Accounts from '../../../common/database/models/accounts';
import {ApiError} from "../../../common/exceptions/api-error";

export class AccountsService {
    public async findAll() {
        try {
            return await Accounts.findAll({include: ["owner"], order: [
                    ['createdAt', 'DESC']
            ]})
        } catch (error) {
            throw ApiError.BadRequest("Bad Request");
        }
    }

    public async findOne(id: string) {
        try {
            return await Accounts.findByPk(id, {include: ["owner"]})
        } catch (error) {
            throw ApiError.NotFoundError("Account Not Found");
        }
    }

    public async removeOne(id: string) {
        try {
            return await Accounts.destroy({where: {id}});
        } catch (error) {
            throw ApiError.BadRequest("Bad Request");
        }
    }

    async create(name: any, ownerId: any) {
        try {
            return await Accounts.create({name, ownerId});
        } catch (error) {
            throw ApiError.BadRequest("Bad Request");
        }
    }
}