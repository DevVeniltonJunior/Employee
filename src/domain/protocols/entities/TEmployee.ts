export namespace TEmployee {
  export type Entity = {
    employeeId: number
    employeeName: string
    employeeRole: string
  }

  export type Model = {
    employeeId: number
    employeeName: string
    employeeRole: string
  }

  export type DTO = {
    employeeId: number
    employeeName?: string
    employeeRole?: string
  }
}
