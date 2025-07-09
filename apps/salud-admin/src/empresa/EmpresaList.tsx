import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmpresaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"empresas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created_At" />
        <TextField label="direccion" source="direccion" />
        <TextField label="ID" source="id" />
        <TextField label="nombre_comercial" source="nombreComercial" />
        <TextField label="razon_social" source="razonSocial" />
        <TextField label="rfc" source="rfc" />
        <TextField label="telefono" source="telefono" />
        <DateField source="updatedAt" label="Updated_At" />{" "}
      </Datagrid>
    </List>
  );
};
