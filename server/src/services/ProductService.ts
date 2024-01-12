import { prisma } from "../db/script";
import IProductService from "../types/services/IProductServices";
import Product from "../types/tables/IProduct";

class ProductServices implements IProductService {
  async getAllProducts(): Promise<Product[]> {
    try {
      const Products = await prisma.product.findMany()
      return Products
    } catch {
      throw new Error('No Product found')
    } 
  }
  async getProductById(id: number): Promise<Product> {
    try {
      const product = await prisma.product.findUnique({
        where: {productId: id}
      })

      if (!product) throw new Error('Product not found')
      return product
    } catch(err) {
      throw err
    }
  }
  async createProduct(name: string, description: string, price: number, slug: string, stockQuantity: number): Promise<Product> {
    try {
      const Product = await prisma.product.create({
        data: {
          name,
          description,
          slug,
          price,
          stockQuantity
        }
      })
      return Product
    } catch (err) {
      throw err
    }
  }
  async updateProduct(id: number, name: string, description: string, price: number, slug: string, stockQuantity: number): Promise<Product> {
    try {
      const Product = prisma.product.update({
        where: {productId: id},
        data: {
          name,
          description,
          price,
          stockQuantity
        }
      })
      return Product
    } catch {
      throw new Error('Product not found')
    }
  }
  async deleteProduct(id: number): Promise<Product> {
    try {
      const deletedProduct = await prisma.product.delete({
        where: {productId: id}
      })
      return deletedProduct
    } catch {
      throw new Error('Product not found')
    }
  } 
}

export default ProductServices