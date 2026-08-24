import { useParams } from "react-router"
import recettes from "../data/recettes_cuisine.json"



export default function DetailRecette() {
    const { id } = useParams()
    const recette = recettes.find(
        (recette) => recette.id === Number(id)
    )
    console.log(recette)
    return (
        <div className="detail-recette">

            <h1>{recette.nom}</h1>

            <img className="detail-image" src={recette.image} alt={recette.nom}/>

            <div className="detail-infos">
                <p>Nombre de personnes : {recette.nombre_personnes}</p>
                <p>Temps de préparation : {recette.temps_preparation}</p>
                <p>Temps de cuisson : {recette.temps_cuisson}</p>
            </div>

            <div className="detail-bloc">
                <h2>Ingrédients</h2>

                {recette.ingredients.map((ingredient, index) => (
                    <p key={index}>
                        {ingredient.nom} : {ingredient.quantite} {ingredient.unite}
                    </p>
                ))}
            </div>

            <div className="detail-bloc">
                <h2>Préparation</h2>

                {recette.etapes.map((etape, index) => (
                    <p key={index}>
                        {index + 1}. {etape}
                    </p>
                ))}
            </div>

        </div>
    )
}
