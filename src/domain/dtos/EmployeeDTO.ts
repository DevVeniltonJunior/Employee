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
      employeeId: this._employeeId.toNumber(),
      employeeName: this._employeeName ? this._employeeName.toString() : undefined,
      employeeRole: this._employeeRole ? this._employeeRole.toString() : undefined
    }
  }
}
