import './App.css';
import Login from './pages/Login';
import StudentsView from './pages/StudentsView';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import NewStudent from './pages/NewStudent';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/" exact>
          <Redirect to='/login' />
        </Route>
        <Route path="/students" exact>
          <StudentsView />
        </Route>
        <Route path="/student/add" exact>
          <NewStudent />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
