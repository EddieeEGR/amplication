import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EmpresaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="direccion" source="direccion" />
        <TextInput label="nombre_comercial" source="nombreComercial" />
        <TextInput label="razon_social" source="razonSocial" />
        <TextInput label="rfc" source="rfc" />
        <TextInput label="telefono" source="telefono" />
      </SimpleForm>
    </Create>
  );
};
