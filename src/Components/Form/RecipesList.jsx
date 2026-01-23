import { useState } from "react"
import { Recipes } from "./Recipes";

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

        //facciamo in modo che se newRecipes (l'input del form al momento che viene premuto invio)
        //è vuoto, allora usciamo dalla funzione e non invia nulla, in modo da non mandare righe vuote 
        if (newRecipes === "") {
            return;
        }

        //creiamo un array (grazie a spred) dove salviamo i valori precedenti con l'aggiunta di quello nuovo
        const updatedRecipes = [...recipes, newRecipes];
        //tramite setRecipes cambiamo il valore di Recipes nell'array precedentemente creato
        setRecipes(updatedRecipes);
        //tramite setNewRecipes cambiamo il valore di newRecipes in una stringa vuota, così che all;invio del form si resetti e non rimnga la scritta precedente
        setNewRecipes("");
    }

    //creiamo una funzione per rimuovere una ricetta dall'array, indiceArray sarà l'indice del bottone in cui abbiamo fatto il click
    const removeRecipes = indiceArray => {
        //andiamo a scorrere tutto l'array comparando ogni volta l'indice dell'array con quello che abbiamo cliccato 
        const updatedRecipes = recipes.filter((recipe, i) => {
            //quando i due inidici corrispondono non lo salva nel nuovo array che filter sta generando
            return i !== indiceArray
        });
        //tramite setRecipes andiamo a modificare Recipes nell'array appena generato
        setRecipes(updatedRecipes);
    }

    //creiamo una funzione per salvare l'input
    const saveInputOnChange = e => { setNewRecipes(e.target.value) }

    return (
        <div className="recipes-container">
            <h2 className="recipes-title" >Ricette:</h2>
            <ul className="recipes-list">
                {/* andiamo a ciclare la lista di ricette per stamparle tutte a schermo */}
                {recipes.map((recipe, index) => (
                    <Recipes
                        key={index}
                        title={recipe}
                        /* richiamno la funzione removeRecipes */
                        removeRecipes={() => { removeRecipes(index) }}
                    />
                ))}
            </ul>
            {/* form per aggiungere nuova Recipes alla lista precedente */}
            <form onSubmit={addRecipes}>
                <div className="input-container">
                    <input
                        type="text"
                        className=""
                        placeholder="Aggiungi una ricetta"
                        value={newRecipes}
                        onChange={saveInputOnChange}
                    />
                    <button className="btn-add">Aggiungi</button>
                </div>
            </form>

        </div>
    )
}
