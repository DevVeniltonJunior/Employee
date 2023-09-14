import { Employee } from '@/domain/entities/Employee'
import { EmployeeId } from '@/domain/valueObjects'

type EmployeeFilter = {
  id?: number[]
  name?: string
  role?: string
}

export interface IEmployeeQueryRepository {
  findOne(id: EmployeeId): Promise<Employee>
  findMany(filter: EmployeeFilter): Promise<Employee[]>
}
