import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PacienteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="id_usuario" source="idUsuario" />
        <TextInput label="pacientes" source="pacientes" />
      </SimpleForm>
    </Edit>
  );
};
