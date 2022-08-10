import React, {createContext, useContext, useState} from "react";

const DogContext = createContext()

export const useDogContext = () => useContext(DogContext)

export const DogProvider = ({children})=> {
    const [availableDogs, setAvailableDogs]=useState([{name:"Freckles", id:2, breed:"bully"},{name:"Rover", id:2, breed:"bully"}])
    function adoptDog(name){
    }

    return(
        <DogContext.Provider value={{adoptDog, availableDogs, setAvailableDogs, balance:1000}}>
            {children}
        </DogContext.Provider>
    )

}