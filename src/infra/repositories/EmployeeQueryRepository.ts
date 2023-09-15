import { Employee } from '@/domain/entities'
import { IEmployeeQueryRepository } from '@/domain/protocols'
import { EmployeeId, EmployeeName, EmployeeRole } from '@/domain/valueObjects'
import { DatabaseAdapter, EmployeeAdapter } from '@/infra/adapters'

type EmployeeFilter = {
  id?: EmployeeId[]
  name?: EmployeeName
  role?: EmployeeRole
}

export class EmployeeQueryRepository implements IEmployeeQueryRepository {
  private readonly database = new DatabaseAdapter()

  public async findOne(id: EmployeeId): Promise<Employee> {
    const entity = await this.database.findOne(id.toNumber())

    return EmployeeAdapter.toEntity(entity)
  }

  public async findMany(filter: EmployeeFilter): Promise<Employee[]> {
    const model = await this.database.findMany({
      id: filter.id?.map(value => value.toNumber()),
      name: filter.name?.toString(),
      role: filter.role?.toString()
    })
    if(!model || model.length <= 0) return []

    const entity = model.map((item) => EmployeeAdapter.toEntity(item))

    return entity
  }
}
