import { EmployeeId, EmployeeName, EmployeeRole } from '@/domain/valueObjects'
import { TEmployee } from '@/domain/protocols'

export class EmployeeDTO {
  constructor (
    private readonly _employeeId: EmployeeId,
    private readonly _employeeName?: EmployeeName,
    private readonly _employeeRole?: EmployeeRole
  ) {}

  public getId(): EmployeeId {
    return this._employeeId
  }

  public getName(): EmployeeName | undefined {
    return this._employeeName
  }
  
  public getRole(): EmployeeRole | undefined {
    return this._employeeRole
  }

  public toJson(): TEmployee.DTO {
    return {
      id: this._employeeId.toNumber(),
      name: this._employeeName ? this._employeeName.toString() : undefined,
      role: this._employeeRole ? this._employeeRole.toString() : undefined
    }
  }
}
