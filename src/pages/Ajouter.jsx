/*

Permettre à l'utilisateur d'ajouter les ingrédients
présents dans son frigo et de rechercher les recettes
qui correspondent à ces ingrédients

DONNÉES:
- ingredient : valeur actuellement saisie dans l'input
- ingredients : tableau des ingrédients ajoutés
- recettes : recettes importées depuis le fichier JSON
- Link : navigation vers le détail d'une recette
*/

import { Link } from "react-router"
import { useState } from "react"
import { TrashIcon, PlusIcon } from "@phosphor-icons/react"
import recettes from "../data/recettes_cuisine.json"

export default function Ajouter() {
    // ingredient contient la valeur actuellement saisie dans l'input
    const [ingredient, setIngredient] = useState("")

    // ingredients contient tous les ingrédients ajoutés par l'utilisateur
    const [ingredients, setIngredients] = useState([])

    // Filtrage des recettes
    const recettesFiltrees = recettes.filter((recette) =>
        // some() vérifie si au moins un ingrédient correspond à la recette
        ingredients.some((ingredientUtilisateur) =>
            // some() parcourt les ingredients dans chaque recettes et on conserve
            //dés qu'un ingredient est trouvé
            recette.ingredients.some((ingredientRecette) =>
                ingredientRecette.nom === ingredientUtilisateur
            )
        )
    )


    // ajoute l'ingredient saisie au tableau ingrédient
    function ajouterIngredient() {
         // pas d'ajout si vide
        if (ingredient === "") {
            return
        }
        // empeche d'ajouter 2 fois le meme ingredient
        if (ingredients.includes(ingredient)) {
            return
        }
        // crée un nouveau tableau contenat les acienne valeur plus la nouvelle valeur
        setIngredients([...ingredients, ingredient])
        setIngredient("")
    }
    // supprime de la liste l'ingrédient
    function supprimerIngredient(ingredientASupprimer) {
        // filter() crée un nouveau tableau contenant tous
        // les ingrédients sauf celui que l'on veut supprimer.
        const nouveauTableau = ingredients.filter(
            (ingredient) => ingredient !== ingredientASupprimer
        )
        // mise à jour
        setIngredients(nouveauTableau)
    }

    return(
        <div className="ajouter">
            <h1>Ajouter des ingredients</h1>

            <div className="ajout-formulaire">
                <input className="ingredient-input" type="text" id="nom" name="nom" value={ingredient} onChange={(e) => {setIngredient(e.target.value)}} />
                <button className="bouton-ajouter" onClick={ajouterIngredient }><PlusIcon /></button>
            </div>
            {/* parcourt le tableau des ingrédients saisis
                et affiche chaque ingrédient avec son bouton supprimer. */}
            {ingredients.map((ingredient) => (
            <div className="ingredient-item" key={ingredient}>
                <p>{ingredient}</p>
                <button className="bouton-supprimer" onClick={() => supprimerIngredient(ingredient)}><TrashIcon /></button>
            </div>

        ))}

            <h2>Recettes trouvées</h2>
            {/* Parcourt les recettes obtenues après le filtrage. */}
            {recettesFiltrees.map((recette) => (
                <Link
                    to={`/detailrecette/${recette.id}`}
                    key={recette.id}
                >
                    <div className="recette-card">
                        <img src={recette.image} alt={recette.nom} />
                        <p>{recette.nom}</p>
                    </div>
                </Link>
            ))}
        </div>
    )


}
