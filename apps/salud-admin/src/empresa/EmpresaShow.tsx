import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EMPRESA_TITLE_FIELD } from "./EmpresaTitle";

export const EmpresaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created_At" />
        <TextField label="direccion" source="direccion" />
        <TextField label="ID" source="id" />
        <TextField label="nombre_comercial" source="nombreComercial" />
        <TextField label="razon_social" source="razonSocial" />
        <TextField label="rfc" source="rfc" />
        <TextField label="telefono" source="telefono" />
        <DateField source="updatedAt" label="Updated_At" />
        <ReferenceManyField
          reference="Clinica"
          target="empresaId"
          label="clinicas"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="activa" source="activa" />
            <TextField label="ciudad" source="ciudad" />
            <TextField label="cp" source="cp" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dir" source="dir" />
            <ReferenceField
              label="empresa"
              source="empresa.id"
              reference="Empresa"
            >
              <TextField source={EMPRESA_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="estado" source="estado" />
            <TextField label="ID" source="id" />
            <TextField label="nombre_comercial" source="nombreComercial" />
            <TextField label="nombre" source="razonSocial" />
            <TextField label="tel" source="tel" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
