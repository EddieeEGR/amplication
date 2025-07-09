import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UsuarioList } from "./usuario/UsuarioList";
import { UsuarioCreate } from "./usuario/UsuarioCreate";
import { UsuarioEdit } from "./usuario/UsuarioEdit";
import { UsuarioShow } from "./usuario/UsuarioShow";
import { PacienteList } from "./paciente/PacienteList";
import { PacienteCreate } from "./paciente/PacienteCreate";
import { PacienteEdit } from "./paciente/PacienteEdit";
import { PacienteShow } from "./paciente/PacienteShow";
import { EmpresaList } from "./empresa/EmpresaList";
import { EmpresaCreate } from "./empresa/EmpresaCreate";
import { EmpresaEdit } from "./empresa/EmpresaEdit";
import { EmpresaShow } from "./empresa/EmpresaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"salud"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Usuario"
          list={UsuarioList}
          edit={UsuarioEdit}
          create={UsuarioCreate}
          show={UsuarioShow}
        />
        <Resource
          name="Paciente"
          list={PacienteList}
          edit={PacienteEdit}
          create={PacienteCreate}
          show={PacienteShow}
        />
        <Resource
          name="Empresa"
          list={EmpresaList}
          edit={EmpresaEdit}
          create={EmpresaCreate}
          show={EmpresaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
