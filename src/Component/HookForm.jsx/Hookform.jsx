import useInputState from "../../Hooks/UseInputState";


const Hookform = () => {

    const [name , handleNameChange] = useInputState('Rojoni')

    const handleSubmit = e =>{
        console.log('form data', name);
        
        e.preventDefault()  ;
 
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={handleNameChange}  className="mt-4" type="email" name="email"></input>
          <br></br>
          <input

            className="mt-4"
            type="password"
            name="password"
            required
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
};

export default Hookform;