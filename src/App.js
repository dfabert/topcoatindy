import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { Painting } from './pages/Painting'
import { Solutions } from './pages/Solutions'
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/painting' element={<Painting />} />
        <Route exact path='/Solutions' element={<Solutions />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
