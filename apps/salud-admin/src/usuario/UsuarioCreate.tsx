import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const UsuarioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apellido_materno" source="apellidoMaterno" />
        <TextInput label="apellido_paterno" source="apellidoPaterno" />
        <PasswordInput label="contraseña" source="contraseA" />
        <TextInput label="correo" source="correo" type="email" />
        <DateTimeInput label="creado_en" source="creadoEn" />
        <BooleanInput label="estatus" source="estatus" />
        <TextInput label="id_usuario" source="idUsuario" />
        <TextInput label="nombre" source="nombre" />
        <TextInput label="rol" source="rol" />
      </SimpleForm>
    </Create>
  );
};
