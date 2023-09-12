import { InvalidParams } from '@/domain/exceptions'

export class EmployeeRole {
  constructor (private readonly value: string) {
    if(!this.isValid(value)) throw new InvalidParams('EmployeeRole')
  }

  private isValid(value: string): boolean {
    if(value.length < 3 || value.length > 100) return false
    return true
  }

  public toString(): string {
    return this.value
  }
}
