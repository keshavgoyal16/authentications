import Login from './LoginPgae.js/Login'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import FirstRout from './FirstRoutPage.js/FirstRout';

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/"><Login/></Route>
      <Route exact path="/FirstRout"><FirstRout/></Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
