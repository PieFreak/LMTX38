import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import GamePlay from './pages/GamePlay';
import About from './pages/About';
import Profile from './pages/Profile';
import GameOverview from './pages/GameOverview';
import Result from './pages/Result';
import CreateGame from './pages/CreateGame';
import Netflix from './pages/Netflix';


import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/gameplay' element={<GamePlay/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/gameoverview' element={<GameOverview/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/creategame' element={<CreateGame/>}/>
      <Route path='/netflix' element={<Netflix/>}/>
      <Route path="/*" element={<div>Error</div>}/>
    </Routes>
  );
}

export default App;
