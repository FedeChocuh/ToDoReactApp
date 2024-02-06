

export function Task(props){
    return(
        <div>
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
        <button type="submit">{props.remove()}</button>
        </div>
    )
}