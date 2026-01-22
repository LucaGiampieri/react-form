import { useState } from "react"

export function RecipesList() {

    //setto una varibile di partenza iniziale, con le ricette iniziali
    const initialRecipes = ["Lasagne alla bolognese", "Trofie al pesto", "Gnocchi al ragù di anatra", "Orecchiette alle cime di rape"]

    //creiamo una varibile di stato per gestire la lista di ricette
    const [recipes, setRecipes] = useState(initialRecipes)

    //creiamo un'altra varibile per gestire i valori di imput
    const [newRecipes, setNewRecipes] = useState('');

    //creiamo una funzione per gestire l'invio del form al click sul button
    const addRecipes = e => {
        //facciamo in modo che l'invio del form non resetti la pagina
        e.preventDefault();
        //creiamo un array (grazie a spred) dove salviamo i valori precedenti con l'aggiunta di quello nuovo
        const updatedRecipes = [...recipes, newRecipes];
        //tramite setRecipes cambiamo il valore di Recipes nell'array precedentemente creato
        setRecipes(updatedRecipes);
        //tramite setNewRecipes cambiamo il valore di newRecipes in una stringa vuota, così che all;invio del form si resetti e non rimnga la scritta precedente
        setNewRecipes("");
    }

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
            {/* form per aggiungere nuovo task a lista precedente */}
            <form onSubmit={addRecipes}>
                <div className="input-container">
                    <input
                        type="text"
                        className=""
                        placeholder="Aggiungi una ricetta"
                        value={newRecipes}
                        onChange={e => { setNewRecipes(e.target.value) }}
                    />
                    <button className="btn">Aggiungi</button>
                </div>
            </form>

        </div>
    )
}
