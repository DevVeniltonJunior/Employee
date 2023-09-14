export class DatabaseException extends Error {
  constructor(param: string) {
    super(param)
    this.name = `DatabaseException: ${param}`
  }
}
