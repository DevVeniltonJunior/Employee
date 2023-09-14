import { EmployeeDTO } from '@/domain/dtos'
import { IEmployeeCommandRepository } from '@/domain/protocols'
import { EmployeeId } from '../valueObjects'

export class UpdateEmployee {
  constructor(private readonly _repository: IEmployeeCommandRepository) {}
  async execute(dto: EmployeeDTO, id: EmployeeId): Promise<void> {
    await this._repository.update(dto, id)
  }
}
