import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const UsuarioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="apellido_materno" source="apellidoMaterno" />
        <TextField label="apellido_paterno" source="apellidoPaterno" />
        <TextField label="correo" source="correo" />
        <TextField label="creado_en" source="creadoEn" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="estatus" source="estatus" />
        <TextField label="ID" source="id" />
        <TextField label="id_usuario" source="idUsuario" />
        <TextField label="nombre" source="nombre" />
        <TextField label="rol" source="rol" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
