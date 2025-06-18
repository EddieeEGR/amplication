import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PacienteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"pacientes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="antecedentes" source="antecedentes" />
        <TextField label="contacto" source="contacto" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="datos-demograficos" source="datosDemograficos" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
