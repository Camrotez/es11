function Age(props){
    return(
        props.age2 >18 ? <p>your age is {props.age2}</p> : "You are very young!"
    )
}
export default Age