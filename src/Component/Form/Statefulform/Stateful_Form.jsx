
const Stateful_Form = () => {
    const handleSubmit =e =>{

    }
    return (
        <div>
           <form onClick={handleSubmit} >

                <input className="mt-4" type="email" name="email">   
                </input>
                <br></br>
                <input className="mt-4" type="email" name="password">   
                </input>
                <br></br>
                <input type="submit" value="Submit">
                </input>
            </form> 
        </div>
    );
};

export default Stateful_Form;