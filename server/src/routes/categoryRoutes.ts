import express, {Request, Response} from "express";
import CategoryServices from "../services/CategoryServices";

const categoryRouter = express.Router()
const categoryService = new CategoryServices()

categoryRouter.get('/', async (req: Request, res: Response) => {
  try {
    const categorys = await categoryService.getAllCategories()
    res.send(categorys).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

categoryRouter.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  try {
    const category = await categoryService.getCategoryById(id)
    res.send(category).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

categoryRouter.post('/', async (req: Request, res: Response) => {
  const {name, slug} = req.body

  try {
    const category = await categoryService.createCategory(name, slug)
    res.send(category).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

categoryRouter.patch('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const {name, slug} = req.body

  try {
    const category = await categoryService.updateCategory(id, name, slug)
    res.send(category).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

categoryRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  try {
    const category = await categoryService.deleteCategory(id)
    res.send(category).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})


export default categoryRouter