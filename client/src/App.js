import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home, Contact, Basket, About, NotFound} from './pages'
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/basket' element={<Basket />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
