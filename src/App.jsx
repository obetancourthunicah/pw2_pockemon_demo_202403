import './App.css'
import ListPage from './pages/List';
import DetailPage from './pages/Detail';
import {BrowserRouter as Router, Routes,  Route, } from 'react-router-dom';

const BASE_DIR = import.meta.env.BASE_URL;

function App() {
  // "JSX" -> nomenclatura (facebook | meta) pseudoHTML
  return (
    <Router basename={BASE_DIR}>
      <Routes>
          <Route path='/' element={(<ListPage/>)} />
          <Route path='/detail/:pokemonId' element={(<DetailPage/>)} />
          <Route path='*' element={(<div>Pagina no encontrada</div>)} />
      </Routes>
    </Router>
  )
}

export default App
