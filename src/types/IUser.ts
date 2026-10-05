import { Rol } from './Rol';

export interface IUser {
  id: string;
  nombre: string;
  email: string;
  contrasena: string;
  rol: Rol;
}