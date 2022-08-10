import {useDogContext} from "../utils/dogContext"
import {useContext, useEffect, useState } from "react"
import {useParams} from "react-router-dom"

export default function Contact(props){
    // const [userBalance, setUserBalance]=useContext(100)
    const {availableDogs, setAvailableDogs}=useDogContext()
    const [pokemon, setPokemon]= useState()
    

    let { pokemonname } = useParams();

    useEffect(()=>{
       fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
       .then((data)=>data.json())
       .then((cleanedData)=>{
           let pokename = cleanedData.name
           setPokemon(pokename)
       })
    },[])

   function changeDogs(){
        setAvailableDogs([...availableDogs, {thisworks:"CONTACT PAGE"}])
    }

    return (
        <div>
            <h1>{pokemon}</h1>
            <div className="name"></div>
        <button onClick={changeDogs}>
            Activate Lasers
        </button>
        <h1>{availableDogs[2]?.thisworks}</h1>
    
        <h1></h1>
        </div>
    )
}