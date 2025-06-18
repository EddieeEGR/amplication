import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CitaTitle } from "../cita/CitaTitle";
import { Citas02Title } from "../citas02/Citas02Title";
import { RecetaTitle } from "../receta/RecetaTitle";

export const MedicoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cedula" source="cedula" />
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
        <TextInput label="especialidad" source="especialidad" />
        <TextInput label="horarios" source="horarios" />
        <TextInput label="perfil" source="perfil" />
        <ReferenceArrayInput source="recetas" reference="Receta">
          <SelectArrayInput
            optionText={RecetaTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
