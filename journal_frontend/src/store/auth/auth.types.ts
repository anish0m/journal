export interface AuthState {
  token: string;
  loading: boolean;
  error: string;
}

export interface SignupPayload {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}