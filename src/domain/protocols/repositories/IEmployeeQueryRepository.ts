import { Employee } from '@/domain/entities/Employee'
import { EmployeeId } from '@/domain/valueObjects'

export interface IEmployeeQueryRepository {
  findOne(id: EmployeeId): Promise<Employee>
  findMany(ids: EmployeeId[]): Promise<Employee>
}
