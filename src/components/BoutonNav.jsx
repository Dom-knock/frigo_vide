/*

Afficher la barre de navigation principale placer en bas de l'application

*/

// Link permet de naviguer entre les pages
import { Link } from "react-router";
// import des icones
import { HouseIcon, CookingPotIcon, HeartIcon } from "@phosphor-icons/react";

export default function BoutonNav() {

    return (
        <nav className="bouton-nav">
            {/* navigation vers la page d'accueil. */}
            <Link to="/"><HouseIcon size={28} /><span>Accueil</span></Link>
            {/* navigation vers la liste des recettes. */}
            <Link to="/recettes"><CookingPotIcon size={28} /><span>Recettes</span></Link>
            {/* navigation vers les recettes favorites. */}
            <Link to="/favoris"><HeartIcon size={28} /><span>Favoris</span></Link>

        </nav>
    );
}
