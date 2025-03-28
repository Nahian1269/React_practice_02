import { useState } from "react"

const useInputState =( defaultValue = null) =>{
    const[input, setinput] = useState(defaultValue) ; 
    const handaleChange = e =>{
        setinput(e.traget.vale)
    }

    return[input ,handaleChange]

}

export default useInputState ; 