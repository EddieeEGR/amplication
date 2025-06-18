import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MEDICO_TITLE_FIELD } from "../medico/MedicoTitle";
import { PACIENTE_TITLE_FIELD } from "./PacienteTitle";

export const PacienteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="antecedentes" source="antecedentes" />
        <TextField label="contacto" source="contacto" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="datos-demograficos" source="datosDemograficos" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Cita" target="pacienteId" label="citas">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="estado" source="estado" />
            <TextField label="fecha" source="fecha" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="medico"
              source="medico.id"
              reference="Medico"
            >
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Citas02"
          target="pacienteId"
          label="citas02s"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="estado" source="estado" />
            <TextField label="fechaHora" source="fechaHora" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Medico"
              source="medico.id"
              reference="Medico"
            >
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Receta"
          target="pacienteId"
          label="recetas"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="fecha" source="fecha" />
            <TextField label="ID" source="id" />
            <TextField label="medicamento" source="medicamento" />
            <ReferenceField
              label="medico"
              source="medico.id"
              reference="Medico"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
