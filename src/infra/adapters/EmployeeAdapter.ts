import { EmployeeDTO } from '@/domain/dtos'
import { Employee } from '@/domain/entities'
import { TEmployee } from '@/domain/protocols'
import { EmployeeId, EmployeeName, EmployeeRole } from '@/domain/valueObjects'

export class EmployeeAdapter {
  public static toEntity(data: TEmployee.Model): Employee {
    return new Employee(
      new EmployeeId(data.id),
      new EmployeeName(data.name),
      new EmployeeRole(data.role)
    )
  }

  public static toModel(data: Employee): TEmployee.Model {
    return data.toJson()
  }

  public static toPartialModel(data: EmployeeDTO): Partial<TEmployee.Model> {
    return data.toJson()
  } 

  public static toDTO(data: TEmployee.DTO): EmployeeDTO {
    return new EmployeeDTO(
      new EmployeeId(data.id),
      data.name ? new EmployeeName(data.name) : undefined,
      data.role ? new EmployeeRole(data.role) : undefined
    )
  }
}
