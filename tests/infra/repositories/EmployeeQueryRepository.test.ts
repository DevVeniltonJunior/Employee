import { Employee } from '@/domain/entities'
import { EmployeeId, EmployeeName, EmployeeRole } from '@/domain/valueObjects'
import { EmployeeCommandRepository, EmployeeQueryRepository } from '@/infra/repositories'

describe('[Repository] EmployeeQuery', () => {
  const comandRepository = new EmployeeCommandRepository()

  const fixture = new Employee(
    new EmployeeId(1),
    new EmployeeName('Teste'),
    new EmployeeRole('User')
  )

  let _id: EmployeeId

  it('Should be able to find an existing Employee', async () => {
    const sut = new EmployeeQueryRepository()
    _id = (await comandRepository.create(fixture)).getId()
    
    const entity = await sut.findOne(_id)

    expect(entity.toJson()).toEqual({
      id: _id.toNumber(),
      name: 'Teste',
      role: 'User'
    })
  })

  it('Should be able to find many existing Employee', async () => {
    const sut = new EmployeeQueryRepository()

    const _anotherId = (await comandRepository.create(fixture)).getId()
    const entitys = sut.findMany({ id: [_id, _anotherId]})

    await expect(() => entitys).not.toThrow()
  })
})
