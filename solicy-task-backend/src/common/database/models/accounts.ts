import {DataTypes, Model, Optional} from 'sequelize';
import sequelize from "../config/db";
import Owners from "./owners";

interface AccountsAttributes {
    id: string;
    name: string;
    ownerId: string;
}

interface AccountsCreationAttributes
    extends Optional<AccountsAttributes, 'id'> {
}

export interface AccountsInstance
    extends Model<AccountsAttributes, AccountsCreationAttributes>,
        AccountsAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const Accounts = sequelize.define<AccountsInstance>('accounts', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    ownerId: {
        type: DataTypes.UUID,
        field: "owner_id"
    },
}, {
    paranoid: true
});

Accounts.belongsTo(Owners, {foreignKey: "ownerId", as: "owner"})

export default Accounts;