import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MedicamentoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="dosis" source="dosis" />
        <TextInput label="nombre" source="nombre" />
      </SimpleForm>
    </Create>
  );
};
