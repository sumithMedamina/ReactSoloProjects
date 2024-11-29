

export default function Joke(props){
    return(
        <>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>{props.punchline}</p>
            <hr />
        </>
    )
}