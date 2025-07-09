import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const EmpresaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created_At" />
        <TextField label="direccion" source="direccion" />
        <TextField label="ID" source="id" />
        <TextField label="nombre_comercial" source="nombreComercial" />
        <TextField label="razon_social" source="razonSocial" />
        <TextField label="rfc" source="rfc" />
        <TextField label="telefono" source="telefono" />
        <DateField source="updatedAt" label="Updated_At" />
      </SimpleShowLayout>
    </Show>
  );
};
