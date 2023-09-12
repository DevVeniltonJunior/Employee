import { EmployeeId } from '@/domain/valueObjects'
import { InvalidParams } from '@/domain/exceptions'

const validValues = [1, 10, 20]
// eslint-disable-next-line @typescript-eslint/no-loss-of-precision
const invalidValues = [-1, 0, 99999999999999999999]

describe('[Value Object] EmployeeId', () => {
  validValues.map((value) => {
    it(`Should create a EmployeeId successfully with value: ${value}`, () => {
      expect(() => new EmployeeId(value)).not.toThrow()
    })
  })

  invalidValues.map((value) => {
    it(`Should throw an error when try to create a EmployeeId with value: ${value}`, () => {
      expect(() => new EmployeeId(value)).toThrow(new InvalidParams('EmployeeId'))
    })
  })

  it('Should return a number', () => {
    const sut = new EmployeeId(1)
    expect(sut.toNumber()).toBe(1)
    expect(typeof sut.toNumber()).toBe('number')
  })
})
