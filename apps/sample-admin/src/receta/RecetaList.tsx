import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MEDICO_TITLE_FIELD } from "../medico/MedicoTitle";
import { PACIENTE_TITLE_FIELD } from "../paciente/PacienteTitle";

export const RecetaList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"recetas"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
