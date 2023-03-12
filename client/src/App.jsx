import NavBar from "./components/NavBar/NavBar";
import './App.scss'
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
   return (
      <div className="App">
         <NavBar />
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Register />} />
         </Routes>
      </div>
   );
}

export default App;
