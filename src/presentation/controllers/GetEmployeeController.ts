import { EmployeeId, EmployeeName, EmployeeRole } from '@/domain/valueObjects'
import { EmployeeQueryRepository } from '@/infra/repositories'
import { TGetEmployee, TRoute, Response } from '@/presentation/protocols'

export class GetEmployeeController {
  public static async handle(req: TRoute.handleParams<TGetEmployee.Request.body, TGetEmployee.Request.params, TGetEmployee.Request.query>): Promise<Response<TGetEmployee.Response>> {
    const repository = new EmployeeQueryRepository()

    const ids = req.query.id ? req.query.id.split(',') : undefined
    
    const _id = ids ? ids.map((value) => new EmployeeId(parseInt(value))) : undefined
    const _name = req.query.name ? new EmployeeName(req.query.name) : undefined
    const _role = req.query.role ? new EmployeeRole(req.query.role) : undefined
    
    const filter = {
      id: _id,
      name: _name,
      role: _role
    }
    
    try{
      const entities = await repository.findMany(filter)
  
      if(!entities || entities.length <= 0 ) return {
        statusCode: 400,
        data: { error: 'Employee not found'}
      }
  
      return {
        statusCode: 200,
        data: {entities}
      }
    } catch {
      return {
        statusCode: 500,
        data: { error: 'Server Error'}
      }
    }
  }

}
