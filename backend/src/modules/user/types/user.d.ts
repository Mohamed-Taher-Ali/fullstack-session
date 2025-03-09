export interface IUser {
  password: string;
  email: string;
  name: string;

  validatePassword?: (password: string) => Promise<boolean>;
}
