import './App.css';
//import Registration from './Components/Registration';
//import Login from './Components/Login';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      {/* <Registration/> */}
      {/* <br/>
      <Login/> */}
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
