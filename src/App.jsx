/*

Organiser la navigation entre les différentes pages de l'application

DONNÉES:
- Routes et Route : gestion des routes avec React Router
- Accueil : page d'accueil
- Ajouter : ajout des ingrédients et recherche de recettes
- Favoris : affichage des recettes favorites
- Recettes : affichage de toutes les recettes
- DetailRecette : détail d'une recette sélectionnée
- BoutonNav : barre de navigation présente sur toutes les pages
*/

import { Routes, Route } from 'react-router';
import Accueil from './pages/Accueil.jsx'
import Ajouter from './pages/Ajouter.jsx'
import Favoris from './pages/Favoris.jsx'
import Recettes from './pages/Recettes.jsx'
import DetailRecette from './pages/DetailRecette.jsx'
import BoutonNav from "./components/BoutonNav";

function App() {
  return (
    <>
      {/* Toutes les routes disponibles pour l'application. */}
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/ajouter" element={<Ajouter />} />
      <Route path="/favoris" element={<Favoris />} />
      <Route path="/recettes" element={<Recettes />} />
      <Route path="/detailrecette/:id" element={<DetailRecette />} />
    </Routes>

    <BoutonNav />

    </>
  )
}

export default App
