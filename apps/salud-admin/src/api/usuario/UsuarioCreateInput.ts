export type UsuarioCreateInput = {
  apellidoMaterno?: string | null;
  apellidoPaterno?: string | null;
  contraseA: string;
  correo: string;
  creadoEn?: Date | null;
  estatus?: boolean | null;
  idUsuario: string;
  nombre: string;
  rol?: string | null;
};
