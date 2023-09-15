import { EmployeeDTO } from '@/domain/dtos'
import { UpdateEmployee } from '@/domain/usecases'
import { EmployeeId, EmployeeName, EmployeeRole } from '@/domain/valueObjects'
import { EmployeeCommandRepository } from '@/infra/repositories'
import { TUpdateEmployee, TRoute, Response } from '@/presentation/protocols'

export class UpdateEmployeeController {
  public static async handle(req: TRoute.handleParams<TUpdateEmployee.Request.body, TUpdateEmployee.Request.params, TUpdateEmployee.Request.query>): Promise<Response<TUpdateEmployee.Response>> {
    const employeeParam = req.body

    console.log('test: ', req.body)

    const repository = new EmployeeCommandRepository()
    const updateEmployee = new UpdateEmployee(repository)

    try {
      await updateEmployee.execute(new EmployeeDTO(
        new EmployeeId(employeeParam.id),
        employeeParam.name ? new EmployeeName(employeeParam.name) : undefined,
        employeeParam.role ? new EmployeeRole(employeeParam.role) : undefined
      ), new EmployeeId(employeeParam.id))

    return {
      statusCode: 200,
      data: {}
    } 
  }catch {
    return {
      statusCode: 500,
        data: { error: 'Server Error'}
    }
} 
} 
}
