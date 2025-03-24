
const Form = () => {

    const handleSubmit = e =>{

        e.preventDefault();
        console.log(e.target.form.name.value);
        console.log(e.target.form.email.value);
        
        console.log('Submited');
        
    }
    return (
        <div>
            <form onClick={handleSubmit} >
                <input type="text" name="name">   
                </input>
                <input className="mt-4" type="email" name="email">   
                </input>
                <br></br>
                <input type="submit" value="Submit">
                </input>
            </form>
        </div>
    );
};

export default Form;