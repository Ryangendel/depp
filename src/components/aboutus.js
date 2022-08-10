import {useDogContext} from "../utils/dogContext"
import {useContext } from "react"
import {Link} from "react-router-dom"

export default function AboutUs(props){
    // const [userBalance, setUserBalance]=useContext(100)
    const {availableDogs, setAvailableDogs}=useDogContext()

   function changeDogs(){
        setAvailableDogs([...availableDogs, {name:"LUNA", id:1, breed:"yorkshire"}])
    }

    return (
        <div>
        <h1>{availableDogs[0].name}</h1>
        <h1>{availableDogs[0].id}</h1>
        <h1>{availableDogs[0].breed}</h1>
        
        <button onClick={changeDogs}>
            Activate Lasers
        </button>
        {/* <Link to={`/home/productinfo/${pokemonName}`}>Product info</Link> */}
        <h1>{availableDogs[2]?.breed}</h1>
        </div>
    )
}