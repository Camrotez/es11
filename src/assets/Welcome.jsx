import Age from "./Age"
function Welcome(props) {
  return (
    <div>
      <p>Welcome {props.name}</p>
      <Age age2 = {props.age}/>
    </div>
  )
}

export default Welcome