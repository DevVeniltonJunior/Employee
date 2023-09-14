import { EmployeeId, EmployeeName, EmployeeRole } from '@/domain/valueObjects'
import { TEmployee } from '@/domain/protocols'

export class Employee {
  constructor (
    private readonly _employeeId: EmployeeId,
    private readonly _employeeName: EmployeeName,
    private readonly _employeeRole: EmployeeRole
  ) {}

  public getId(): EmployeeId {
    return this._employeeId
  }

  public getName(): EmployeeName {
    return this._employeeName
  }
  
  public getRole(): EmployeeRole {
    return this._employeeRole
  }

  public toJson(): TEmployee.Entity {
    return {
      id: this._employeeId.toNumber(),
      name: this._employeeName.toString(),
      role: this._employeeRole.toString()
    }
  }
}
