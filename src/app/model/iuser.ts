export interface Iuser {
  id?: string;
  email: string;
  password: string;
  points: number;

  activeTask?: string[];
  completeTask?: string[];
  failTask?: string[];
}
