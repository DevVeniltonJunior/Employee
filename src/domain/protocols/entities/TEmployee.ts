export namespace TEmployee {
  export type Entity = {
    id: number
    name: string
    role: string
  }

  export type Model = {
    id: number
    name: string
    role: string
  }

  export type DTO = {
    id: number
    name?: string
    role?: string
  }
}
