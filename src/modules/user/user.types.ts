export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface IUserRepository {
  getAllUsers(): Promise<Array<IUser> | null>;
  getUserById(id: string): Promise<IUser | null>;
}
