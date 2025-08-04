import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PacienteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="id_usuario" source="idUsuario" />
        <TextInput label="pacientes" source="pacientes" />
      </SimpleForm>
    </Create>
  );
};
