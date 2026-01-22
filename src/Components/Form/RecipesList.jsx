import { useState } from "react"

export function RecipesList() {

    //setto una varibile di partenza iniziale, con le ricette iniziali
    const initialRecipes = ["Lasagne alla bolognese", "Trofie al pesto", "Gnocchi al ragù di anatra", "Orecchiette alle cime di rape"]

    //creiamo una varibile di stato per gestire la lista di ricette
    const [recipes, setRecipes] = useState(initialRecipes)

    return (
        <div className="recipes-container">
            <h2 className="recipes-title" >Ricette:</h2>
            <ul className="recipes-list">
                {/* andiamo a ciclare la lista di ricette per stamparle tutte a schermo */}
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <a className="recipe" href="#"> {recipe} </a>
                    </li>
                ))}
            </ul>


        </div>
    )
}
