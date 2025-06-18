import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MedicoList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Medicos"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="cedula" source="cedula" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="especialidad" source="especialidad" />
        <TextField label="horarios" source="horarios" />
        <TextField label="ID" source="id" />
        <TextField label="perfil" source="perfil" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
