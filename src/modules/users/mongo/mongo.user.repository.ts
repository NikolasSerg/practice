import { IUser, IUserRepository } from '../user.types.js';
import UserModel from './user.schema.js';

export class MongoUserRepository implements IUserRepository {
  async getAllUsers(): Promise<Array<IUser> | null> {
    return (await UserModel.find().lean()) || null;
  }
}
