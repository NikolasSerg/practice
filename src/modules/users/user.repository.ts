// import { Model } from 'mongoose';
import { IDatabase } from 'src/databases/database.interface.js';
// import { IUser } from './mongo/user.schema.js';

export class UserRepository {
  // private typeDb: ;
  private db?: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
    // this.model = model;
  }

  // async getUserByEmail(email: string): Promise<IUser | null> {
  //   if (process.env.DB_TYPE == 'MONGO') {
  //     return (await (this.model as Model<IUser>).findOne({ email }).lean<IUser>()) || null;
  //   }
  // }
}
