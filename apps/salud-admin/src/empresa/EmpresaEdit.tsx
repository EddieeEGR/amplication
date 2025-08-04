import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ClinicaTitle } from "../clinica/ClinicaTitle";

export const EmpresaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="clinicas" reference="Clinica">
          <SelectArrayInput
            optionText={ClinicaTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="direccion" source="direccion" />
        <TextInput label="nombre_comercial" source="nombreComercial" />
        <TextInput label="razon_social" source="razonSocial" />
        <TextInput label="rfc" source="rfc" />
        <TextInput label="telefono" source="telefono" />
      </SimpleForm>
    </Edit>
  );
};
