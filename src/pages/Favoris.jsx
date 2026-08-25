/*
Afficher les recettes que l'utilisateur a ajoutées à ses favoris
DONNEES:
- useContext : permet d'accéder au Context
- FavorisContext : contient les favoris partagés
- favoris : tableau des recettes favorites
- recette.image : image de la recette
- recette.nom : nom de la recette
*/
import { useContext } from "react";
import { FavorisContext } from "../context/FavorisContext";

export default function Favoris() {
    //recupere le tableau des favoris partagés
    const { favoris } = useContext(FavorisContext);

    return(
        <div className="favoris-page">

            <h1>Mes Favoris</h1>
            {/* parcourt le tableau des favoris et crée une card pour chaque recette */}
            {favoris.map((recette) => (

                <div className="favori-card" key={recette.id}>
                    <img src={recette.image} alt={recette.nom} />
                    <p>{recette.nom}</p>
                </div>
            ))}

        </div>
    )
}
