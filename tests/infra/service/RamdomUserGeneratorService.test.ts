import { RamdomUserGeneratorService } from '@/infra/services'

describe('[Services] Ramdom User Generator', () => {
  it('Teste', async () => {
    const service = new RamdomUserGeneratorService()
    const response = await service.generate()
  
    expect(response.length).toBe(10)
  })
})
