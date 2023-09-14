import { DatabaseAdapter } from '@/infra/adapters'

describe('[Adapter] Database', () => {
  let _id: number
  let _anotherId: number

  describe('Success case', () => {
    it('Should persist a new employee without throw any error', async () => {
      const sut = new DatabaseAdapter()
      const employee = sut.create({
        id: 1,
        name: 'Test',
        role: 'User'
      })
  
      _id = (await employee).id
  
      expect(() => employee).not.toThrow()
    })
  
    it('Should update an existing employee without throw any error', () => {
      const sut = new DatabaseAdapter()
  
      expect(() => sut.update({
        name: 'Updated Name',
      }, 
      _id)).not.toThrow()
    })
  
    it('Should find one existing employee without throw any error', () => {
      const sut = new DatabaseAdapter()
  
      expect(() => sut.findOne(_id)).not.toThrow()
    })
  
    it('Should find many existing employee without throw any error', async () => {
      const sut = new DatabaseAdapter()
      const anotherEmployee = await sut.create({
        id: 1,
        name: 'Test',
        role: 'User'
      })
  
      _anotherId = anotherEmployee.id
  
      expect(() => sut.findMany({ role: 'User'})).not.toThrow()
    })
  
    it('Should delete an existing employee without throw any error', async () => {
      const sut = new DatabaseAdapter()
  
      expect(() => sut.delete(_id)).not.toThrow()
      await sut.delete(_anotherId)
    })
  })
})
