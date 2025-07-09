import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EmpresaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="direccion" source="direccion" />
        <TextInput label="nombre_comercial" source="nombreComercial" />
        <TextInput label="razon_social" source="razonSocial" />
        <TextInput label="rfc" source="rfc" />
        <TextInput label="telefono" source="telefono" />
      </SimpleForm>
    </Edit>
  );
};
