import './App.css';
import Home from './pages/Home';
import Entry from './pages/Entry';
import GamePlay from './pages/GamePlay'

import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/entry' element={<Entry/>}/>
      <Route path='/gameplay' element={<GamePlay/>}/>
    </Routes>
  );
}

export default App;
