import './App.css';
import Home from './pages/Home';
import Entry from './pages/Entry';
import GamePlay from './pages/GamePlay'
import About from './pages/About'

import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/entry' element={<Entry/>}/>
      <Route path='/gameplay' element={<GamePlay/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  );
}

export default App;
