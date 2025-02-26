import { IDatabase } from './database.interface.js';
import { DBTYPE } from './database.types.js';
import { MongoDatabase } from './mongo.database.js';

export class DatabaseFactory {
  static createDatabase(type: DBTYPE, connectionString: string): IDatabase {
    if (type === DBTYPE.MONGO) {
      return new MongoDatabase(connectionString);
    }
    throw new Error('Unsupported database type');
  }
}
