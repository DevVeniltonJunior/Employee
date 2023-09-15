import { TEmployee } from '@/domain/protocols'

export namespace TCreateEmployee {
  export namespace Request {
    export type params = object
    export type body = TEmployee.Entity
    export type query = object
    }
  export type Response = any
}
