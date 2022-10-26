import './styles/App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import MusicProduction from './pages/MusicProduction'
import Photography from './pages/Photography'
import EquiptmentRental from './pages/EquiptmentRental'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route exact path='/musicproduction' element={<MusicProduction />}/>
          <Route exact path='/photography' element={<Photography />}/>
          <Route exact path='/equiptmentrental' element={<EquiptmentRental />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
