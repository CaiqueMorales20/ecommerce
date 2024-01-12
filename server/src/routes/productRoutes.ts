import express, {Request, Response} from "express";
import ProductServices from "../services/ProductService";

const productRouter = express.Router()
const productService = new ProductServices()

productRouter.get('/', async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts()
    res.send(products).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

productRouter.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  try {
    const product = await productService.getProductById(id)
    res.send(product).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

productRouter.post('/', async (req: Request, res: Response) => {
  const {name, description, price, slug, stockQuantity} = req.body

  try {
    const product = await productService.createProduct(name, description, price, slug, stockQuantity)
    res.send(product).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

productRouter.patch('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const {name, description, price, slug, stockQuantity} = req.body

  try {
    const product = await productService.updateProduct(id, name, description, price, slug, stockQuantity)
    res.send(product).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

productRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  try {
    const product = await productService.deleteProduct(id)
    res.send(product).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})


export default productRouter