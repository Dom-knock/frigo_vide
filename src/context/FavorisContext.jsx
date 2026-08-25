/*

Créer et gérer un Context permettant de partager
les favoris entre les différents composants de l'application

DONNÉES:
- createContext : crée le Context des favoris
- useState : stocke le tableau des favoris
- useEffect : declenche la sauvegarde quand les favoris change
- localStorage : conserve les favoris dans le navigateur
- recette : recette reçue lors d'un ajout
- children : composants placés à l'intérieur du Provider
*/


import { createContext, useState, useEffect } from "react";

// on crée le context pour partager les favoris
export const FavorisContext = createContext();
//init du tableau des favoris
export function FavorisProvider({ children }) {

    const [favoris, setFavoris] = useState(() => {
         //on regarde si des favoris sont dans le Storage
        const favorisSauvegardes = localStorage.getItem("favoris");
        //on transforme le texte en tableau js
        if (favorisSauvegardes) {
            return JSON.parse(favorisSauvegardes);
        }

        return [];
    });
    // ajoute une recette au fav sauf si elle est presente
    useEffect(() => {

        localStorage.setItem("favoris", JSON.stringify(favoris));

    }, [favoris]);

    function ajouterFavori(recette) {

        const existeDeja = favoris.some(
            (favori) => favori.id === recette.id
        );

        if (existeDeja) {
            return;
        }

        setFavoris([...favoris, recette]);
    }

    return (
        // avec Provider on permet au favoris d'etre accessible partout
        <FavorisContext.Provider value={{ favoris, ajouterFavori }}>
            {children}
        </FavorisContext.Provider>
    );
}
