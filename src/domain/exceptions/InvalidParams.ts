export class InvalidParams extends Error {
  constructor(param: string) {
    super(param)
    this.name = `invalidParam: ${param}`
  }
}
