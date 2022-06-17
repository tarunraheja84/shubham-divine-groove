import './App.css';
import Body from './Components/Body';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Button from './Components/Button';

import {
  Routes,
  Route,
} from "react-router-dom";
import AddStudent from './Routes/AddStudent';


function App() {
  return (
   <div>
   <Navbar />
   <div className="components">
    <Body />
    <Card />
   <Routes>
      <Route path="/" element={<Button/>} />
      <Route path="/addStudent" element={<AddStudent/>} />
    </Routes>
   </div>
   </div>
  );
}

export default App;
