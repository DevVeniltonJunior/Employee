import { Employee } from '@/domain/entities/Employee'
import { EmployeeId, EmployeeName, EmployeeRole } from '@/domain/valueObjects'

type EmployeeFilter = {
  id?: EmployeeId[]
  name?: EmployeeName
  role?: EmployeeRole
}

export interface IEmployeeQueryRepository {
  findOne(id: EmployeeId): Promise<Employee>
  findMany(filter: EmployeeFilter): Promise<Employee[] | []>
}
