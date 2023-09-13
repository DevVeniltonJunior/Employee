import { Employee } from '@/domain/entities'

export interface ICreateEmployee {
  execute(entity: Employee): Promise<Employee>
}
