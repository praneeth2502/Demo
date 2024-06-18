import logo from './logo.svg';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import HomeComponent from './Components/Home/Home';
import AddTask from './Components/AddTask/AddTask';
import GetTasks from './Components/GetTasks/GetTasks';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/'>
      <Route index element={<HomeComponent />} />
      <Route path="home" element={<HomeComponent />} />
      <Route path="Contact" element={<AddTask />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="AddTask" element={<AddTask />} />
    </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
