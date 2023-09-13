import { EmployeeId } from '@/domain/valueObjects'
import { IEmployeeCommandRepository } from '@/domain/protocols'

export class DeleteEmployee {
  constructor(private readonly _repository: IEmployeeCommandRepository) {}
  async execute(id: EmployeeId): Promise<void> {
    await this._repository.delete(id)
  }
}
