export class InfraException extends Error {
  constructor(param: string) {
    super(param)
    this.name = `InfraException: ${param}`
  }
}
