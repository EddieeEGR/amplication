import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MedicoTitle } from "../medico/MedicoTitle";
import { PacienteTitle } from "../paciente/PacienteTitle";

export const RecetaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fecha" source="fecha" />
        <TextInput label="medicamento" source="medicamento" />
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
      </SimpleForm>
    </Edit>
  );
};
