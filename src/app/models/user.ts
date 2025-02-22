export class user{
  userName: string;
  password: string;

  constructor(){
    this.userName = '';
    this.password = '';
  }
}

export interface IAPIRESPONSE{
  
    message: string,
    result: boolean,
    data: any
  
}