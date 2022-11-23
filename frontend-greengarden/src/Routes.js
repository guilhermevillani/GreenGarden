import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import InventoryConttrol from "./pages/InventoryConttrol";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

export default () => {
  return (
    <>
      <Routes>
        {/* <Route path='/home' element={<Home />} /> */}
        {/* <Route path='/home' element={<Home />} /> */}
        {/* <Route path='/home' element={<Home />} /> */}
        {/* <Route /> */}
        {/* <Route path='/dashboard' element={<Dashboard />}>
           <Route path='/estoque' element={<Inventory/>} /> }
          <Route path='estoque' element={(
            <>
              <h1>CADASTRO DE ESTOQUE</h1>
            </>
          )} />
        </Route> */}

        <Route path="/" element={<SignIn />}>
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/inventory" element={<Inventory/>}></Route>
        </Route> */}

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="inventoryconttrol" element={<InventoryConttrol />} />
          
          {/* ... etc. }*/}
        </Route> 

        {/* <Route path="/" element={<SignIn />}>
          <Route path="home" element={<h1>TESTE</h1>} />
          <Route path="dashboard" element={<Dashboard/>} />
          {/* ... etc. }
        </Route> */}

      </Routes>
    </>
  );
}