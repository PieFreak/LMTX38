import './App.css';
import Home from './pages/Home';
import Entry from './pages/Entry';
import GamePlay from './pages/GamePlay'
import About from './pages/About'
import GameOverview from './pages/GameOverview';
import Result from './pages/Result';
import CreateGame from './pages/CreateGame';

import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/entry' element={<Entry/>}/>
      <Route path='/gameplay' element={<GamePlay/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gameoverview' element={<GameOverview/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/creategame' element={<CreateGame/>}/>
    </Routes>
  );
}

export default App;
