import { useContext } from "react";
import { FavorisContext } from "../context/FavorisContext";

export default function Favoris() {
    const { favoris } = useContext(FavorisContext);
    console.log(favoris);
    return(
        <div className="favoris-page">

            <h1>Mes Favoris</h1>

            {favoris.map((recette) => (

                <div className="favori-card" key={recette.id}>
                    <img src={recette.image} alt={recette.nom} />
                    <p>{recette.nom}</p>
                </div>
            ))}

        </div>
    )
}
