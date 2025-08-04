import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmpresaTitle } from "../empresa/EmpresaTitle";

export const ClinicaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="activa" source="activa" />
        <TextInput label="ciudad" source="ciudad" />
        <TextInput label="cp" source="cp" />
        <TextInput label="dir" source="dir" />
        <ReferenceInput source="empresa.id" reference="Empresa" label="empresa">
          <SelectInput optionText={EmpresaTitle} />
        </ReferenceInput>
        <TextInput label="estado" source="estado" />
        <TextInput label="nombre_comercial" source="nombreComercial" />
        <TextInput label="nombre" source="razonSocial" />
        <TextInput label="tel" source="tel" />
      </SimpleForm>
    </Create>
  );
};
