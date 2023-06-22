import { IOwner } from "./IOwner";

export interface IAccounts {
  id: string;
  name: string;
  ownerId: string;
  owner: IOwner;
  createdAt: string;
  updatedAt: string;
}
