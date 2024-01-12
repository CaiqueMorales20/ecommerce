import Product from "../tables/IProduct";

interface IProductService {
  getAllProducts(): Promise<Product[]>
  getProductById(id: number): Promise<Product>
  createProduct(name: string, description: string, price: number, slug: string, stockQuantity: number): Promise<Product>
  updateProduct(id: number, name: string, description: string, price: number, slug:string, stockQuantity: number): Promise<Product>
  deleteProduct(id: number): Promise<Product>
}

export default IProductService