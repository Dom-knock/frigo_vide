import { createContext, useState } from "react";


export const FavorisContext = createContext();

export function FavorisProvider({ children }) {

    const [favoris, setFavoris] = useState([]);

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
        <FavorisContext.Provider value={{ favoris, ajouterFavori }}>
            {children}
        </FavorisContext.Provider>
    );
}
