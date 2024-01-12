import { Product } from "@prisma/client"

interface IProductService {
  getAllProducts(): Promise<Product[]>
  getProductById(id: number): Promise<Product>
  createProduct(categoryId: number, name: string, description: string, image: string, price: number, slug: string, stockQuantity: number): Promise<Product>
  updateProduct(id: number, categoryId: number,  name: string, description: string, image: string, price: number, slug:string, stockQuantity: number): Promise<Product>
  deleteProduct(id: number): Promise<Product>
}

export default IProductService