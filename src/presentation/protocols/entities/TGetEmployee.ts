export namespace TGetEmployee {
  export namespace Request {
    export type params = object
    export type body = object
    export type query = {
      id?: string
      name?: string
      role?: string
    }
  }
  export type Response = any
}
