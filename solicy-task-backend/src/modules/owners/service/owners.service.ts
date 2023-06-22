import {ApiError} from "../../../common/exceptions/api-error";
import Owners from "../../../common/database/models/owners";

export class OwnersService {
    public async findAll() {
        try {
            return await Owners.findAll()
        } catch (error) {
            throw ApiError.BadRequest("Bad Request");
        }
    }
}