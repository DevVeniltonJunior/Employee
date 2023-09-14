import { Employee } from '@/domain/entities'
import { IEmployeeQueryRepository } from '@/domain/protocols'
import { EmployeeId } from '@/domain/valueObjects'
import { DatabaseAdapter, EmployeeAdapter } from '@/infra/adapters'
import { DatabaseException } from '@/infra/exceptions'

type EmployeeFilter = {
  id?: number[]
  name?: string
  role?: string
}

export class EmployeeQueryRepository implements IEmployeeQueryRepository {
  private readonly database = new DatabaseAdapter()

  public async findOne(id: EmployeeId): Promise<Employee> {
    const entity = await this.database.findOne(id.toNumber())

    return EmployeeAdapter.toEntity(entity)
  }

  public async findMany(filter: EmployeeFilter): Promise<Employee[]> {
    const model = await this.database.findMany(filter)
    if(!model || model.length <= 0) throw new DatabaseException('Entity not found')

    const entity = model.map((item) => EmployeeAdapter.toEntity(item))

    return entity
  }
}
