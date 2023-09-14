import { Employee } from '@/domain/entities/Employee'
import { EmployeeDTO } from '@/domain/dtos'
import { EmployeeId } from '@/domain/valueObjects'

export interface IEmployeeCommandRepository {
  create(entity: Employee): Promise<Employee>
  update(dto: EmployeeDTO, id: EmployeeId): Promise<void>
  delete(id: EmployeeId): Promise<void>
}
