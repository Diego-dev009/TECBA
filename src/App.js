import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componetes/NavBar';
import Inicio from './componetes/Inicio';
import Contacto from './componetes/Contacto';
import About from './componetes/About';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/inicio' element = {<Inicio/>}/>
      <Route path='/Contacto' element = {<Contacto/>}/>
      <Route path='/About' element = {<About/>}/>

    </Routes>


    </BrowserRouter>

  );
}

export default App;
