import { Routes, Route } from 'react-router';
import Accueil from './pages/Accueil.jsx'
import Ajouter from './pages/Ajouter.jsx'
import Favoris from './pages/Favoris.jsx'
import Recettes from './pages/Recettes.jsx'
import DetailRecette from './pages/DetailRecette.jsx'

function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/ajouter" element={<Ajouter />} />
      <Route path="/favoris" element={<Favoris />} />
      <Route path="/recettes" element={<Recettes />} />
      <Route path="/detailrecette" element={<DetailRecette />} />
    </Routes>

    </>
  )
}

export default App
