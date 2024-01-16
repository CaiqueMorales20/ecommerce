import { Product } from "@prisma/client";
import { prisma } from "../db/script";
import IProductService from "../types/services/IProductServices";

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

  async getProductBySlug(slug: string): Promise<Product> {

    const allProducts = await prisma.product.findMany()

    const currentProduct = allProducts.filter((product) => product.slug === slug)

    try {
      const product = await prisma.product.findUnique({
        where: {productId: currentProduct[0].productId}
      })

      if (!product) throw new Error('Product not found')
      return product
    } catch(err) {
      throw err
    }
  }

  async getProductByCategory(name: string): Promise<Product[]> {

    const allCategories = await prisma.category.findMany()

    const category = allCategories.filter((category) => category.slug === name)

    const currentCategory = category[0].categoryId


    try {
      const product = await prisma.product.findMany({
        where: {categoryId: currentCategory}
      })

      if (!product) throw new Error('Product not found')
      return product
    } catch(err) {
      throw err
    }
  }

  async createProduct(categoryId: number, name: string, description: string, image: string, price: number, slug: string, stockQuantity: number): Promise<Product> {
    try {
      const Product = await prisma.product.create({
        data: {
          categoryId,
          name,
          description,
          image,
          price,
          slug,
          createdAt: new Date(),
          updatedAt: new Date(),
          stockQuantity
        }
      })
      return Product
    } catch (err) {
      throw err
    }
  }

  async updateProduct(id: number, categoryId: number, name: string, description: string, image: string, price: number, slug: string, stockQuantity: number): Promise<Product> {
    try {
      const Product = prisma.product.update({
        where: {productId: id},
        data: {
          categoryId,
          name,
          description,
          image,
          slug,
          price,
          updatedAt: new Date(),
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