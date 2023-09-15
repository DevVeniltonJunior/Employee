import { TEmployee } from '@/domain/protocols'
import { PrismaClient } from '@prisma/client'
import { DatabaseException } from '@/infra/exceptions'

type EmployeeFilter = {
  id?: number[]
  name?: string
  role?: string
}

export class DatabaseAdapter {
private readonly prisma = new PrismaClient()

  public async findOne(_id: number): Promise<TEmployee.Model> {
    try {
      const data = await this.prisma.employee.findUnique({ where: { id: _id }})
      if(!data) throw new DatabaseException('Entity not found')
      return data
    } catch (err: any) {
      throw new DatabaseException(err.message)
    }
  }

  public async findMany(filter: EmployeeFilter): Promise<TEmployee.Model[] | []> {
    try {
      const data = await this.prisma.employee.findMany({
        where: {
          id: { in: filter.id },
          name: filter.name,
          role: filter.role
        }
      })

      return data
    } catch (err: any) {
      throw new DatabaseException(err.message)
    }
  }

  public async create(entity: TEmployee.Model): Promise<TEmployee.Model> {
    try {
      return await this.prisma.employee.create({
        data: {
          name: entity.name,
          role: entity.role
        }
      })
    } catch (err: any) {
      throw new DatabaseException(err.message)
    }
  }

  public async update(dto: Partial<TEmployee.Model>, _id: number): Promise<void> {
    try {
      await this.prisma.employee.update({
        where: { id: _id },
        data: {
          name: dto.name,
          role: dto.role
        }
      })
    } catch (err: any) {
      throw new DatabaseException(err.message)
    }
  }

  public async delete(_id: number): Promise<void> {
    try {
      await this.prisma.employee.delete({ where: { id: _id } })
    } catch (err: any) {
      throw new DatabaseException(err.message)
    }
  }
}
