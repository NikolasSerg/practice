import { Types } from 'mongoose';
import { IUser, IUserRepository } from '../user.types.js';
import UserModel from './user.schema.js';

export class MongoUserRepository implements IUserRepository {
  async getAllUsers(): Promise<Array<IUser> | null> {
    return (await UserModel.find().lean()) || null;
  }
  async getUserById(id: string): Promise<IUser | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid user ID format');
    }
    return (await UserModel.findById({ _id: id }).lean()) || null;
  }
}
