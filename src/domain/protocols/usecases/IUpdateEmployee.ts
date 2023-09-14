import { EmployeeDTO } from '@/domain/dtos'
import { EmployeeId } from '@/domain/valueObjects'

export interface IUpdateEmployee {
  execute(dto: EmployeeDTO, id: EmployeeId): Promise<void>
}
