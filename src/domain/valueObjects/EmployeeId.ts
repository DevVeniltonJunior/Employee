import { InvalidParams } from '@/domain/exceptions'

export class EmployeeId {
  constructor (private readonly value: number) {
    if(!this.isValid(value)) throw new InvalidParams('EmployeeId')
  }

  private isValid(value: number): boolean {
    if(value <= 0 || value > 999999999) return false
    return true
  }

  public toNumber(): number {
    return this.value
  }
}
