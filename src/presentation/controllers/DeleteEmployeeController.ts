import { DeleteEmployee } from '@/domain/usecases'
import { EmployeeId } from '@/domain/valueObjects'
import { EmployeeCommandRepository } from '@/infra/repositories'
import { TDeleteEmployee, TRoute, Response } from '@/presentation/protocols'

export class DeleteEmployeeController {
  public static async handle(req: TRoute.handleParams<TDeleteEmployee.Request.body, TDeleteEmployee.Request.params, TDeleteEmployee.Request.query>): Promise<Response<TDeleteEmployee.Response>> {
    const repository = new EmployeeCommandRepository()
    const deleteEmployee = new DeleteEmployee(repository)

    try {
      await deleteEmployee.execute(new EmployeeId(parseInt(req.query.id)))
      
      return {
        statusCode: 200,
        data: {}
      }
    } catch {
      return {
        statusCode: 400,
        data: { message: 'Bad Request'}
      }
    }
  }
}
