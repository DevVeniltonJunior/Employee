import { EmployeeDTO } from '@/domain/dtos'
import { IEmployeeCommandRepository } from '@/domain/protocols'

export class UpdateEmployee {
  constructor(private readonly _repository: IEmployeeCommandRepository) {}
  async execute(dto: EmployeeDTO): Promise<void> {
    await this._repository.update(dto)
  }
}
