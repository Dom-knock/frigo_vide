import { useState } from "react"
import { TrashIcon, PlusIcon } from "@phosphor-icons/react"

export default function Ajouter() {

    const [ingredient, setIngredient] = useState("")
    const [ingredients, setIngredients] = useState([])

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
        </div>
    )


}
