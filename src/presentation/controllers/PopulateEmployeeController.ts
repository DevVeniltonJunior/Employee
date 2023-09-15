import { Employee } from '@/domain/entities'
import { CreateEmployee } from '@/domain/usecases'
import { EmployeeId, EmployeeName, EmployeeRole } from '@/domain/valueObjects'
import { EmployeeCommandRepository } from '@/infra/repositories'
import { RamdomUserGeneratorService } from '@/infra/services'
import { TPopulateEmployee, Response } from '@/presentation/protocols'

export class PopulateEmployeeController {
  public static async handle(): Promise<Response<TPopulateEmployee.Response>> {
    const ramdom = new RamdomUserGeneratorService()

    const generated = await ramdom.generate()

    const _name = generated.map(value => { return value.name.first.concat(' ', value.name.last) })

    const repository = new EmployeeCommandRepository()
    const createEmployee = new CreateEmployee(repository)

    try {
      const entities = await Promise.all(_name.map(async (value) => {
        const entity = await createEmployee.execute(new Employee(
          new EmployeeId(1),
          new EmployeeName(value),
          new EmployeeRole('User')
        ))

        return entity
      }))

      return {
        statusCode: 201,
        data: entities
      }
    } catch (error) {
      return {
        statusCode: 500,
        data: { message: 'Server Error' }
      }
    }
  }
}
