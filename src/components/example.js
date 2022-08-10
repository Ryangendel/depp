import {useDogContext} from "../utils/dogContext"
import {useContext } from "react"

export default function Example(props){
    // const [userBalance, setUserBalance]=useContext(100)
    const {availableDogs, setAvailableDogs}=useDogContext()

   function changeDogs(){
        setAvailableDogs([...availableDogs, {thisworks:"YES!!!!!!!"}])
    }

    return (
        <div>
        <h1>{availableDogs[0].name}</h1>
        <h1>{availableDogs[0].id}</h1>
        <h1>{availableDogs[0].breed}</h1>
        
        <button onClick={changeDogs}>
            Activate Lasers
        </button>
        <h1>{availableDogs[2]?.thisworks}</h1>
        </div>
    )
}