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

export const Citas02List = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"citas02s"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
