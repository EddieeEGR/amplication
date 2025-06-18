import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MedicoList } from "./medico/MedicoList";
import { MedicoCreate } from "./medico/MedicoCreate";
import { MedicoEdit } from "./medico/MedicoEdit";
import { MedicoShow } from "./medico/MedicoShow";
import { PacienteList } from "./paciente/PacienteList";
import { PacienteCreate } from "./paciente/PacienteCreate";
import { PacienteEdit } from "./paciente/PacienteEdit";
import { PacienteShow } from "./paciente/PacienteShow";
import { CitaList } from "./cita/CitaList";
import { CitaCreate } from "./cita/CitaCreate";
import { CitaEdit } from "./cita/CitaEdit";
import { CitaShow } from "./cita/CitaShow";
import { RecetaList } from "./receta/RecetaList";
import { RecetaCreate } from "./receta/RecetaCreate";
import { RecetaEdit } from "./receta/RecetaEdit";
import { RecetaShow } from "./receta/RecetaShow";
import { MedicamentoList } from "./medicamento/MedicamentoList";
import { MedicamentoCreate } from "./medicamento/MedicamentoCreate";
import { MedicamentoEdit } from "./medicamento/MedicamentoEdit";
import { MedicamentoShow } from "./medicamento/MedicamentoShow";
import { Citas02List } from "./citas02/Citas02List";
import { Citas02Create } from "./citas02/Citas02Create";
import { Citas02Edit } from "./citas02/Citas02Edit";
import { Citas02Show } from "./citas02/Citas02Show";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"sample"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Medico"
          list={MedicoList}
          edit={MedicoEdit}
          create={MedicoCreate}
          show={MedicoShow}
        />
        <Resource
          name="Paciente"
          list={PacienteList}
          edit={PacienteEdit}
          create={PacienteCreate}
          show={PacienteShow}
        />
        <Resource
          name="Cita"
          list={CitaList}
          edit={CitaEdit}
          create={CitaCreate}
          show={CitaShow}
        />
        <Resource
          name="Receta"
          list={RecetaList}
          edit={RecetaEdit}
          create={RecetaCreate}
          show={RecetaShow}
        />
        <Resource
          name="Medicamento"
          list={MedicamentoList}
          edit={MedicamentoEdit}
          create={MedicamentoCreate}
          show={MedicamentoShow}
        />
        <Resource
          name="Citas02"
          list={Citas02List}
          edit={Citas02Edit}
          create={Citas02Create}
          show={Citas02Show}
        />
      </Admin>
    </div>
  );
};

export default App;
