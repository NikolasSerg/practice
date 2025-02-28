import { IDatabase } from '@databases/database.interface.js';
import { DBTYPE } from '@databases/database.types.js';
import { MongoUserRepository } from './mongo/mongo.user.repository.js';

export class UserRepositoryFactory {
  private typeDB: string;
  private db: IDatabase;

  constructor(db: IDatabase, typeDB) {
    this.typeDB = typeDB;
    this.db = db;
  }

  createRepository() {
    switch (this.typeDB) {
      case DBTYPE.MONGO:
        return new MongoUserRepository();

      // case DBTYPE.POSTGRES:
      //   if (!this.db) {
      //     throw new Error('Postgres requires a database instance');
      //   }
      //   return new PostgresUserRepository(this.db);
      default:
        throw new Error(`Unsupported database type: ${this.typeDB}`);
    }
  }
}
