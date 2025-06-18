import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MedicamentoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="dosis" source="dosis" />
        <TextInput label="nombre" source="nombre" />
      </SimpleForm>
    </Edit>
  );
};
