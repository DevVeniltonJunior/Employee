import { EmployeeRole } from '@/domain/valueObjects'
import { InvalidParams } from '@/domain/exceptions'

const validValues = ['Bob', 'Renato', 'Jorge']
const invalidValues = ['di', 'i', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ullamcorper arcu, vel sagittis diam. Phasellus faucibus imperdiet mollis. Donec ac suscipit metus, vel vestibulum est. Sed tristique, sapien vitae tempus porttitor, metus sapien venenatis libero, at euismod leo dui vitae enim. Donec egestas lacinia sem a commodo. Quisque facilisis lorem odio, sed efficitur elit congue quis. Nunc lobortis massa sed eros vulputate, eget dictum ipsum dignissim. Morbi cursus dui aliquam tellus mollis tincidunt. Curabitur tristique congue eros, sed porta risus ullamcorper ut.']

describe('[Value Object] EmployeeRole', () => {
  validValues.map((value) => {
    it(`Should create a EmployeeName successfully with value: ${value}`, () => {
      expect(() => new EmployeeRole(value)).not.toThrow()
    })
  })

  invalidValues.map((value) => {
    it(`Should throw an error when try to create a EmployeeName with value: ${value}`, () => {
      expect(() => new EmployeeRole(value)).toThrow(new InvalidParams('EmployeeRole'))
    })
  })

  it('Should return a number', () => {
    const sut = new EmployeeRole('bob')
    expect(sut.toString()).toBe('bob')
    expect(typeof sut.toString()).toBe('string')
  })
})
