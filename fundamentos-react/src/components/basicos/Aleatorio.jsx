export default props =>{
    const numero = 
        Math.floor(Math.random() * (props.max - props.min)) + props.min
    return(
        <div>
            <h1>Número aleatório</h1>
            <p>{numero}</p>
        </div>
    )
}