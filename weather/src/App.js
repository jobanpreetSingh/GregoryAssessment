import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}>
          </Route>
          <Route path='/rooms' exact component={Rooms}>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
