import Accounts from "./accounts";
import {DataTypes, Model, Optional} from "sequelize";
import sequelize from "../config/db";

interface OwnersAttributes {
    id: string;
    name: string;
}

interface OwnersCreationAttributes
    extends Optional<OwnersAttributes, 'id'> {
}

export interface OwnersInstance
    extends Model<OwnersAttributes, OwnersCreationAttributes>,
        OwnersAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const Owners = sequelize.define<OwnersInstance>('owners', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: DataTypes.STRING
}, {
    paranoid: true
});

export default Owners