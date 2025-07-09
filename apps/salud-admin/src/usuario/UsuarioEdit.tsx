import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const UsuarioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="apellido_materno" source="apellidoMaterno" />
        <TextInput label="apellido_paterno" source="apellidoPaterno" />
        <TextInput label="contraseña" source="contraseA" />
        <TextInput label="correo" source="correo" />
        <DateTimeInput label="creado_en" source="creadoEn" />
        <BooleanInput label="estatus" source="estatus" />
        <TextInput label="id_usuario" source="idUsuario" />
        <TextInput label="nombre" source="nombre" />
        <TextInput label="rol" source="rol" />
      </SimpleForm>
    </Edit>
  );
};
