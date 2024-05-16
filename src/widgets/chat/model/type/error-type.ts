export interface ErrorObject {
  code: string
  validation: string
  message: string
  path: string[]
}

export interface ObjError {
  [key: string]: string
}
