import logger from '@app/utils/logger.js';
import { IDatabase } from './database.interface.js';
import mongoose from 'mongoose';

export class MongoDatabase implements IDatabase {
  private uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  async connect(): Promise<void> {
    await mongoose.connect(this.uri);
    logger.info('Connected to MongoDB');
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
    logger.info('Disconnected from MongoDB');
  }
}
