export function Recipes({ title, removeRecipes }) {

    return (
        <li>
            {/* salvo un onClick con una props removeRecipes */}
            <button className="btn-remove" onClick={removeRecipes}>
                X
            </button>
            <a className="recipe" href="#"> {title} </a>
        </li>
    )
}
