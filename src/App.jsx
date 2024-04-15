import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import AllTask from './pages/AllTask';
import NewTask from './pages/NewTask';
import EditTask from './pages/EditTask';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/alltask' element={<AllTask/>} />
    <Route path='/newtask' element={<NewTask/>} />
    <Route path='/edittask' element={<EditTask/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
