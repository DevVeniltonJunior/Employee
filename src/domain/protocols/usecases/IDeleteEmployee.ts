import { EmployeeId } from '@/domain/valueObjects'

export interface IDeleteEmployee {
  execute(id: EmployeeId): Promise<void>
}
