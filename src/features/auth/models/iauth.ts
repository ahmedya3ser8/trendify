export interface IAuthResponse {
  message: string;
  token: string;
  user: {
    email: string;
    name: string;
    role: string;
  }
}

export interface IForgetResponse {
  statusMsg: string;
  message: string;
}

export interface IVerifyCodeResponse {
  status: string;
}

export interface IResetPassResponse {
  token: string;
}
