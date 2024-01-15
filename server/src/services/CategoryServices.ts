import { Category } from "@prisma/client";
import { prisma } from "../db/script";
import ICategoryService from "../types/services/ICategoryServices";

class CategoryServices implements ICategoryService {
  async getAllCategories(): Promise<Category[]> {
    try {
      const Categorys = await prisma.category.findMany()
      return Categorys
    } catch {
      throw new Error('No Category found')
    } 
  }

  async getCategoryById(id: number): Promise<Category> {
    try {
      const Category = await prisma.category.findUnique({
        where: {categoryId: id}
      })

      if (!Category) throw new Error('Category not found')
      return Category
    } catch(err) {
      throw err
    }
  }

  async createCategory(name: string, slug: string, icon: string): Promise<Category> {
    try {
      const Category = await prisma.category.create({
        data: {
          name,
          slug,
          icon,
          createdAt: new Date(),
        }
      })
      return Category
    } catch (err) {
      throw err
    }
  }

  async updateCategory(id: number, name: string, slug: string, icon: string): Promise<Category> {
    try {
      const Category = prisma.category.update({
        where: {categoryId: id},
        data: {
          name,
          slug,
          icon,
          createdAt: new Date(),
        }
      })
      return Category
    } catch {
      throw new Error('Category not found')
    }
  }

  async deleteCategory(id: number): Promise<Category> {
    try {
      const deletedCategory = await prisma.category.delete({
        where: {categoryId: id}
      })
      return deletedCategory
    } catch {
      throw new Error('Category not found')
    }
  } 
}

export default CategoryServices