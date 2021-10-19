import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ClientesCadastrados from './pages/ClientesCadastrados';
import PageNotFound from './pages/PageNotFound';
import CadastroClientes from './pages/CadastroClientes';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/cadastroClientes" component={CadastroClientes}/>
        <Route path="/pageNotFound" component={PageNotFound} />
        <Route path="/clientesCadastrados" component={ClientesCadastrados} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
