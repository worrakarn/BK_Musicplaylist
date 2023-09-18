export class HttpSuccess {
  public message: string;
  public rs_status: number;
  public code: string;
  public rs_data: Array<any>;

  constructor(message: string, code: string, rs_data: Array<any> = []) {
    this.message = message;
    this.rs_status = 1;
    this.code = code;
    this.rs_data = rs_data;
  }
}
