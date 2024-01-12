import User from "../tables/IUser";

interface IUserService {
  getAllUser(): Promise<User[]>
  getUserById(id: number): Promise<User>
  createUser(name: string, email: string): Promise<User>
  updateUser(id: number, name: string, email: string): Promise<User>
  deleteUser(id: number): Promise<User>
}

export default IUserService