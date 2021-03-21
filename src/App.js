import Login from "./component/Login";
import Todo from "./component/Todo";
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Login}/>
        <Route exact path='/todo/:name' component={Todo}/>
      </div>
    </BrowserRouter>
  );
}

export default App;