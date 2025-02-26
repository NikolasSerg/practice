export interface IDatabase {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  findOne<T>(collection: string, query: object): Promise<T | null>;
  findAll<T>(collection: string, query?: object): Promise<T[]>;
  insert<T>(collection: string, data: T): Promise<void>;
  update<T>(collection: string, query: object, data: Partial<T>): Promise<void>;
  delete(collection: string, query: object): Promise<void>;
}
