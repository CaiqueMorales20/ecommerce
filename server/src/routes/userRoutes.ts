import express, {Request, Response} from "express";
import UserServices from "../services/UserServices";

const userRouter = express.Router()
const userService = new UserServices()

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUser()
    res.send(users).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

userRouter.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  try {
    const user = await userService.getUserById(id)
    res.send(user).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

userRouter.post('/', async (req: Request, res: Response) => {
  const {name, email} = req.body

  try {
    const user = await userService.createUser(name, email)
    res.send(user).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

userRouter.patch('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const {name, email} = req.body

  try {
    const user = await userService.updateUser(id, name, email)
    res.send(user).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

userRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  try {
    const user = await userService.deleteUser(id)
    res.send(user).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})


export default userRouter