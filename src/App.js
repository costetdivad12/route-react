
import './App.css';
import NavBar from './layout/NavBar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={ <NavBar />}>
         <Route  index element={<Home />} />
           <Route  path='about' element={<About />} />
           <Route  path='contact' element={<Contact />} />
           <Route path='*' element={<Navigate replace to="/"/>} />
         </Route>
      </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
