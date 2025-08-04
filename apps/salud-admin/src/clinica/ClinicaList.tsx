import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPRESA_TITLE_FIELD } from "../empresa/EmpresaTitle";

export const ClinicaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"clinicas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="activa" source="activa" />
        <TextField label="ciudad" source="ciudad" />
        <TextField label="cp" source="cp" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dir" source="dir" />
        <ReferenceField label="empresa" source="empresa.id" reference="Empresa">
          <TextField source={EMPRESA_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="estado" source="estado" />
        <TextField label="ID" source="id" />
        <TextField label="nombre_comercial" source="nombreComercial" />
        <TextField label="nombre" source="razonSocial" />
        <TextField label="tel" source="tel" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
