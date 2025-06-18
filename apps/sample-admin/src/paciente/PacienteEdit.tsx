import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CitaTitle } from "../cita/CitaTitle";
import { Citas02Title } from "../citas02/Citas02Title";
import { RecetaTitle } from "../receta/RecetaTitle";

export const PacienteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="antecedentes" source="antecedentes" />
        <ReferenceArrayInput source="citas" reference="Cita">
          <SelectArrayInput
            optionText={CitaTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="citas02s" reference="Citas02">
          <SelectArrayInput
            optionText={Citas02Title}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="contacto" source="contacto" />
        <TextInput label="datos-demograficos" source="datosDemograficos" />
        <ReferenceArrayInput source="recetas" reference="Receta">
          <SelectArrayInput
            optionText={RecetaTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
