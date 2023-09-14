import { EmployeeDTO } from '@/domain/dtos'
import { Employee } from '@/domain/entities'
import { EmployeeId, EmployeeName, EmployeeRole } from '@/domain/valueObjects'
import { EmployeeCommandRepository } from '@/infra/repositories'

describe ('[Repository] EmployeeCommand', () => {
  let _id: EmployeeId

  it('Should be able to create a new Employee without throw any error', async () => {
    const sut = new EmployeeCommandRepository()

    const entity = await sut.create(
      new Employee(
        new EmployeeId(1),
        new EmployeeName('test'),
        new EmployeeRole('User')
      )
    )

    _id = entity.getId()

    expect(entity.toJson()).toEqual({
      id: _id.toNumber(),
      name: 'test',
      role: 'User'
    })
  })

  it('Should be able to update an existing Employee without throw any error', async () => {
    const sut = new EmployeeCommandRepository()

    await expect(() => sut.update(
      new EmployeeDTO(
        new EmployeeId(_id.toNumber()),
        new EmployeeName('testUpdated'),
        new EmployeeRole('User')
      ), _id
    )).not.toThrow()
  })

  it('Should be able to delete an existing Employee without throw any error', async () => {
    const sut = new EmployeeCommandRepository()

    await expect(() => sut.delete(_id)).not.toThrow()
  })
})
