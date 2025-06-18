import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MEDICO_TITLE_FIELD } from "../medico/MedicoTitle";
import { PACIENTE_TITLE_FIELD } from "../paciente/PacienteTitle";

export const Citas02Show = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="estado" source="estado" />
        <TextField label="fechaHora" source="fechaHora" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Medico" source="medico.id" reference="Medico">
          <TextField source={MEDICO_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="paciente"
          source="paciente.id"
          reference="Paciente"
        >
          <TextField source={PACIENTE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="tipo" source="tipo" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
