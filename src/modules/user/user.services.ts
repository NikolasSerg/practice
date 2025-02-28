import { IUser, IUserRepository } from './user.types.js';

export class UserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers(): Promise<Array<IUser> | null> {
    return this.userRepository.getAllUsers();
  }
}
