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

export const RecetaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fecha" source="fecha" />
        <TextField label="ID" source="id" />
        <TextField label="medicamento" source="medicamento" />
        <ReferenceField label="medico" source="medico.id" reference="Medico">
          <TextField source={MEDICO_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="paciente"
          source="paciente.id"
          reference="Paciente"
        >
          <TextField source={PACIENTE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
