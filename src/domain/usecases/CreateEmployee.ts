import { Employee } from '@/domain/entities'
import { IEmployeeCommandRepository } from '@/domain/protocols'

export class CreateEmployee {
  constructor(private readonly _repository: IEmployeeCommandRepository) {}
  async execute(entity: Employee): Promise<Employee> {
    return await this._repository.create(entity)
  }
}
