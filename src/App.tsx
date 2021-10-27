import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Cadastro } from './pages/Cadastro';
import { Listagem } from './pages/Listagem';
import './styles/global.scss'
function App() {

  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Listagem}/>
          <Route path="/cadastro" exact component={Cadastro}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
