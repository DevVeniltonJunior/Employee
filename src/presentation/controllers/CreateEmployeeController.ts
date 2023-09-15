import { Employee } from '@/domain/entities'
import { CreateEmployee } from '@/domain/usecases'
import { EmployeeId, EmployeeName, EmployeeRole } from '@/domain/valueObjects'
import { EmployeeCommandRepository } from '@/infra/repositories'
import { TCreateEmployee, TRoute, Response } from '@/presentation/protocols'

export class CreateEmployeeController {
  public static async handle(req: TRoute.handleParams<TCreateEmployee.Request.body, TCreateEmployee.Request.params, TCreateEmployee.Request.query>): Promise<Response<TCreateEmployee.Response>> {
    const employeeParam = req.body

    const repository = new EmployeeCommandRepository()
    const createEmployee = new CreateEmployee(repository)

    try {
      if(!employeeParam.name || !employeeParam.role) return {
        statusCode: 400,
        data: { message: 'Bad Request'}
      }

      const entity = await createEmployee.execute(new Employee(
        new EmployeeId(1),
        new EmployeeName(employeeParam.name),
        new EmployeeRole(employeeParam.role)
      ))
  
      return {
        statusCode: 201,
        data: entity
      }
    } catch {
      return {
        statusCode: 400,
        data: { message: 'Bad Request'}
      }
    }
  }
}
