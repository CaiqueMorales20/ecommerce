import { Category } from "@prisma/client"

interface ICategoryService {
  getAllCategories(): Promise<Category[]>
  getCategoryById(id: number): Promise<Category>
  createCategory(name: string, slug: string, icon: string): Promise<Category>
  updateCategory(id: number, name: string, slug: string, icon: string): Promise<Category>
  deleteCategory(id: number): Promise<Category>
}

export default ICategoryService