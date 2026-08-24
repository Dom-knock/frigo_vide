import { Link } from "react-router"
import { useState } from "react"
import { TrashIcon, PlusIcon } from "@phosphor-icons/react"
import recettes from "../data/recettes_cuisine.json"

export default function Ajouter() {

    const [ingredient, setIngredient] = useState("")
    const [ingredients, setIngredients] = useState([])

    const recettesFiltrees = recettes.filter((recette) =>
        ingredients.some((ingredientUtilisateur) =>
            recette.ingredients.some((ingredientRecette) =>
                ingredientRecette.nom === ingredientUtilisateur
            )
        )
    )



    function ajouterIngredient() {

        if (ingredient === "") {
            return
        }

        if (ingredients.includes(ingredient)) {
            return
        }

        setIngredients([...ingredients, ingredient])
        setIngredient("")
    }

    function supprimerIngredient(ingredientASupprimer) {

        const nouveauTableau = ingredients.filter(
            (ingredient) => ingredient !== ingredientASupprimer
        )

        setIngredients(nouveauTableau)
    }

    return(
        <div className="ajouter">
            <h1>Ajouter des ingredients</h1>

            <div className="ajout-formulaire">
                <input className="ingredient-input" type="text" id="nom" name="nom" value={ingredient} onChange={(e) => {setIngredient(e.target.value)}} />



                <button className="bouton-ajouter" onClick={ajouterIngredient }><PlusIcon /></button>
            </div>
            {ingredients.map((ingredient) => (
            <div className="ingredient-item" key={ingredient}>
                <p>{ingredient}</p>
                <button className="bouton-supprimer" onClick={() => supprimerIngredient(ingredient)}><TrashIcon /></button>
            </div>

        ))}

            <h2>Recettes trouvées</h2>

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
