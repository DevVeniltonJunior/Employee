import 'module-alias/register'

import { Router, Request, Response } from 'express'
import {
  GetEmployeeController,
  CreateEmployeeController,
  UpdateEmployeeController,
  DeleteEmployeeController, 
  PopulateEmployeeController} from '@/presentation/controllers'
import { TDeleteEmployee, TGetEmployee, TCreateEmployee, TUpdateEmployee } from '@/presentation/protocols'

export const router = Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/hello', (req, res) => {
  res.send({'message': 'Hello, Cognum!'})
})

router.get('/employee', async (req: Request<any, any, any, TGetEmployee.Request.query>, res: Response) => {
    const response = await GetEmployeeController.handle(req)
    res.status(response.statusCode).json(response.data)
})

router.post('/employee', async (req: Request<any, any, any, TCreateEmployee.Request.body>, res: Response) => {
    const response = await CreateEmployeeController.handle(req)
    res.status(response.statusCode).json(response.data)
})

router.put('/employee', async (req: Request<any, any, any, TUpdateEmployee.Request.body>, res: Response) => {
  console.log(req.body)
  const response = await UpdateEmployeeController.handle(req)
  res.status(response.statusCode).json(response.data)
})

router.delete('/employee', async (req: Request<any, any, any, TDeleteEmployee.Request.query>, res: Response) => {
    const response = await DeleteEmployeeController.handle(req)
    res.status(response.statusCode).json(response.data)
})

router.get('/populate', async (req, res) => {
  const response = await PopulateEmployeeController.handle()
  res.status(response.statusCode).json(await response.data)
})
