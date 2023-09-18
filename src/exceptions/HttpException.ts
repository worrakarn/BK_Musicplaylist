export class HttpException extends Error {
  public status: number;
  public message: string;
  public rs_status: number;
  public code: string;
  public rs_data: Array<any>;
  public client?: string;

  constructor(status: number, message: string, code: string, rs_data: Array<any> = []) {
    super(message);
    this.status = status;
    this.message = message;
    this.rs_status = 0;
    this.code = code;
    this.rs_data = rs_data;
  }
}
