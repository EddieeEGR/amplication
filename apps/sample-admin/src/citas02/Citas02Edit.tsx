import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";
import { MedicoTitle } from "../medico/MedicoTitle";
import { PacienteTitle } from "../paciente/PacienteTitle";

export const Citas02Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="estado"
          label="estado"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="fechaHora" source="fechaHora" />
        <ReferenceInput source="medico.id" reference="Medico" label="Medico">
          <SelectInput optionText={MedicoTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="paciente.id"
          reference="Paciente"
          label="paciente"
        >
          <SelectInput optionText={PacienteTitle} />
        </ReferenceInput>
        <SelectInput
          source="tipo"
          label="tipo"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
