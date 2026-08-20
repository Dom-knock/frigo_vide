import { Link } from 'react-router'
import imageFrigo from '../assets/frigo.png'

export default function Accueil() {

    return(
        <div className="accueil">

  <h1>Frigo Vide</h1>

  <img src={imageFrigo} alt="Frigo" />

  <p className="presentation">
  L'application qui vous aide à mieux manger
  en utilisant vos restes et en gaspillant
  le moins possible.
  </p>

  <Link className="bouton-accueil" to="/ajouter">
    Y a quoi dans le frigo aujourd'hui ?
  </Link>

</div>
    )
}
