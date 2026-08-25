/*

Afficher toutes les recettes disponibles dans
le fichier JSON
DONNÉES:
- recettes : tableau importé depuis le fichier JSON
- Link : permet de naviguer vers le détail d'une recette
- recette.id : identifiant unique de la recette
- recette.nom : nom de la recette

*/

import recettes from "../data/recettes_cuisine.json";
import { Link } from "react-router";

export default function Recettes() {
    return (
        <div className="recettes-page">

            <h1>Recettes</h1>

            <div className="recettes-liste">
            {/* map() parcourt toutes les recettes du fichier JSON
                    et crée une card */}
                {recettes.map((recette) => (
                    <Link to={`/detailrecette/${recette.id}`} key={recette.id}>

                        <div className="recette-card">
                            <img src={recette.image} alt={recette.nom}/>
                            <p>{recette.nom}</p>
                        </div>
                    </Link>
                ))}

            </div>

        </div>
    );
}
