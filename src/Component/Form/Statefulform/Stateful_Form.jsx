import { useState } from "react";

const Stateful_Form = () => {
    const [email,setEmail] = useState( 'rojoni@sojoni' ) ;
    const[password , setPasswoard] = useState(null) ;
    const[error, setError] = useState('')
    const handleSubmit =e =>{

        if(password.length < 6){
            setError('password must be 6 char')
        }
        e.preventDefault() ;
        console.log( email , password);
        
    }

    const handleEmail =e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
        
    }

    const handlePass = e =>{

        console.log(e.target.value);
        setPasswoard(e.target.value);
        
    }
    return (
        <div>
           <form onSubmit={handleSubmit} >

                <input value={email} onChange={handleEmail} className="mt-4" type="email" name="email" >   
                </input>
                <br></br>
                <input onChange={handlePass} className="mt-4" type="password" name="password" required >   
                </input>
                <br></br>
                <input type="submit" value="Submit">
                </input>
                {
                    error && <p>{error}</p>
                }
            </form> 
        </div>
    );
};

export default Stateful_Form;