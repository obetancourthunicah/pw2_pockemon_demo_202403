import './App.css'
import ListPage from './pages/List';
import DetailPage from './pages/Detail';
import {BrowserRouter as Router, Routes,  Route, } from 'react-router-dom';
function App() {
  // "JSX" -> nomenclatura (facebook | meta) pseudoHTML
  return (
    <Router>
      <Routes>
          <Route path='/' element={(<ListPage/>)} />
          <Route path='/detail/:pokemonId' element={(<DetailPage/>)} />
          <Route path='*' element={(<div>Pagina no encontrada</div>)} />
      </Routes>
    </Router>
  )
}

export default App
