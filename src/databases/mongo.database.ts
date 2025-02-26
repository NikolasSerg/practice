import logger from '@app/utils/logger/index.js';
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

  async findOne<T>(collection: string, query: object): Promise<T | null> {
    const model = mongoose.model(collection, new mongoose.Schema({}, { strict: false }));
    return (await model.findOne(query).lean<T>()) || null;
  }

  async findAll<T>(collection: string, query: object = {}): Promise<T[]> {
    const model = mongoose.model(collection, new mongoose.Schema({}, { strict: false }));
    return await model.find(query).lean<T[]>();
  }

  async insert<T>(collection: string, data: T): Promise<void> {
    const model = mongoose.model(collection, new mongoose.Schema({}, { strict: false }));
    await new model(data).save();
  }

  async update<T>(collection: string, query: object, data: Partial<T>): Promise<void> {
    const model = mongoose.model(collection, new mongoose.Schema({}, { strict: false }));
    await model.updateOne(query, data);
  }

  async delete(collection: string, query: object): Promise<void> {
    const model = mongoose.model(collection, new mongoose.Schema({}, { strict: false }));
    await model.deleteOne(query);
  }
}
