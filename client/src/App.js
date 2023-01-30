import './App.css';
import Home from './pages/Home';
import Entry from './pages/Entry';

import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/entry' element={<Entry/>}/>
    </Routes>
  );
}

export default App;
