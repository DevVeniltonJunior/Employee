import axios from 'axios'
import { InfraException } from '@/infra/exceptions'
import { TRUGService } from '@/infra/protocols'

export class RamdomUserGeneratorService {
  public async generate(): Promise<TRUGService[]> {
    const url = 'https://randomuser.me/api/?results=10&inc=name&format=pretty'
  
    const res = await axios.get(url)
    if(!res) throw new InfraException('RamdomUserGeneratorService')
    return res.data.results
  }
}
