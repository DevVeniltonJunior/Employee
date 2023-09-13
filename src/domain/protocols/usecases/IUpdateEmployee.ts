import { EmployeeDTO } from '@/domain/dtos'

export interface IUpdateEmployee {
  execute(dto: EmployeeDTO): Promise<void>
}
