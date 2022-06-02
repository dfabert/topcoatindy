import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { Painting } from './pages/Painting'
import { Solutions } from './pages/Solutions'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/painting' element={<Painting />} />
        <Route exact path='/Solutions' element={<Solutions />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
