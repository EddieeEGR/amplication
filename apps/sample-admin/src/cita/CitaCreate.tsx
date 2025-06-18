import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MedicoTitle } from "../medico/MedicoTitle";
import { PacienteTitle } from "../paciente/PacienteTitle";

export const CitaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="estado" source="estado" />
        <TextInput label="fecha" source="fecha" />
        <ReferenceInput source="medico.id" reference="Medico" label="medico">
          <SelectInput optionText={MedicoTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="paciente.id"
          reference="Paciente"
          label="paciente"
        >
          <SelectInput optionText={PacienteTitle} />
        </ReferenceInput>
        <TextInput label="tipo" source="tipo" />
      </SimpleForm>
    </Create>
  );
};
