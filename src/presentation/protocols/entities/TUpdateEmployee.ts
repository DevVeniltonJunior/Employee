import { TEmployee } from '@/domain/protocols'

export namespace TUpdateEmployee {
  export namespace Request {
    export type params = object
    export type body = TEmployee.DTO
    export type query = object
    }
  export type Response = any
}
