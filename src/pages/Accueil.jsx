import { Link } from 'react-router'

export default function Accueil() {

    return(
        <div>
  <h1>Accueil</h1>

  <Link to="/ajouter">
    Aller aux ingrédients
  </Link>
   <Link to="/favoris">
    Aller aux favoris
   </Link>
   <Link to="/recettes">
    Aller aux recettes
   </Link>
   <Link to="/detailrecette">
    Aller aux details d'une rectte
   </Link>
</div>
    )
}
