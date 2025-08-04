import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UsuarioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"usuarios"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="apellido_materno" source="apellidoMaterno" />
        <TextField label="apellido_paterno" source="apellidoPaterno" />
        <TextField label="correo" source="correo" />
        <TextField label="creado_en" source="creadoEn" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="estatus" source="estatus" />
        <TextField label="ID" source="id" />
        <TextField label="id_usuario" source="idUsuario" />
        <TextField label="nombre" source="nombre" />
        <TextField label="rol" source="rol" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
