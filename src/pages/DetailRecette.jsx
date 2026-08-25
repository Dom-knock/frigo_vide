/*

Afficher toutes les informations d'une recette
sélectionnée par l'utilisateur

DONNEES:
- id : identifiant récupéré dans l'URL avec useParams()
- recettes : tableau importé depuis le fichier JSON
- FavorisContext : donne accès à ajouterFavori()
- Link : navigation vers la page des favoris

*/
import { useParams } from "react-router"
import recettes from "../data/recettes_cuisine.json"
import { useContext } from "react";
import { FavorisContext } from "../context/FavorisContext";
import { Link } from "react-router";


export default function DetailRecette() {
    // recupere le parametre id
    const { id } = useParams()

    const { ajouterFavori } = useContext(FavorisContext);
    // recherche dans le JSON la recette dont l'id correspond
    // et transforme le nbre en caractère
    const recette = recettes.find(
        (recette) => recette.id === Number(id)
    )

    console.log(recette)
    return (
        <div className="detail-recette">

            <h1>{recette.nom}</h1>

            <img className="detail-image" src={recette.image} alt={recette.nom}/>

            {/* informations sur la recette. */}
            <div className="detail-infos">
                <p>Nombre de personnes : {recette.nombre_personnes}</p>
                <p>Temps de préparation : {recette.temps_preparation}</p>
                <p>Temps de cuisson : {recette.temps_cuisson}</p>
            </div>
            {/* action disponibles pour les favoris. */}
            <div className="detail-actions">
            {/* envoie la recette complète à la fonction  ajouterFavori */}
            <button onClick={() => ajouterFavori(recette)}> Ajouter aux favoris ❤️</button>
            <Link to="/favoris">Voir mes favoris</Link>
            </div>

            <div className="detail-bloc">
                <h2>Ingrédients</h2>
                {/* parcourt le tableau ingredients de la recette et affiche chaque ingredient avec sa quantité */}
                {recette.ingredients.map((ingredient, index) => (
                    <p key={index}>
                        {ingredient.nom} : {ingredient.quantite} {ingredient.unite}
                    </p>
                ))}
            </div>

            <div className="detail-bloc">
                <h2>Préparation</h2>
                {/* parcourt le tableau des etapes */}
                {recette.etapes.map((etape, index) => (
                    <p key={index}>
                        {index + 1}. {etape}
                    </p>
                ))}
            </div>

        </div>
    )
}
