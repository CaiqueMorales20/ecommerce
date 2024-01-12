import { User } from "@prisma/client";
import { prisma } from "../db/script";
import IUserService from "../types/services/IUserServices";

class UserServices implements IUserService {
  async getAllUser(): Promise<User[]> {
    try {
      const users = await prisma.user.findMany()
      return users
    } catch {
      throw new Error('No user found')
    } 
  }
  async getUserById(id: number): Promise<User> {
    try {
      const user = await prisma.user.findUnique({
        where: {id}
      })

      if (!user) throw new Error('User not found')
      return user
    } catch(err) {
      throw err
    }
  }
  async createUser(name: string, email: string): Promise<User> {
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
      return user
    } catch (err) {
      throw err
    }
  }
  async updateUser(id: number, name: string, email: string): Promise<User> {
    try {
      const user = prisma.user.update({
        where: {id},
        data: {
          name,
          email
        }
      })
      return user
    } catch {
      throw new Error('User not found')
    }
  }
  async deleteUser(id: number): Promise<User> {
    try {
      const deletedUser = await prisma.user.delete({
        where: {id}
      })
      return deletedUser
    } catch {
      throw new Error('User not found')
    }
  } 
}

export default UserServices