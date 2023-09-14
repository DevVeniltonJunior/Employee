/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmployeeDTO } from '@/domain/dtos'
import { Employee } from '@/domain/entities'
import { IEmployeeCommandRepository } from '@/domain/protocols'
import { EmployeeId } from '@/domain/valueObjects'
import { DatabaseAdapter, EmployeeAdapter } from '@/infra/adapters'

export class EmployeeCommandRepository implements IEmployeeCommandRepository {
  private readonly database = new DatabaseAdapter()

  public async create(entity: Employee): Promise<Employee> {
    const employeeModel = EmployeeAdapter.toModel(entity)

    delete (<any>employeeModel).id

    const createdEntity = await this.database.create(employeeModel)

    return EmployeeAdapter.toEntity(createdEntity)
  }

  public async update(dto: EmployeeDTO, id: EmployeeId): Promise<void> {
    const employeeModel = EmployeeAdapter.toPartialModel(dto)

    delete (<any>employeeModel).id

    await this.database.update(employeeModel, id.toNumber())
  }
  public async delete(id: EmployeeId): Promise<void> {
    await this.database.delete(id.toNumber())
  }
  
}
