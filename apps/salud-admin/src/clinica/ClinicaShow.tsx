import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { EMPRESA_TITLE_FIELD } from "../empresa/EmpresaTitle";

export const ClinicaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
