
const Reusable_Form = () => {
    const handleSubmit = e =>{
        e.preventDefault()  ;

        
        
    }
    return (
        <div>
        <h2>Sing UP</h2>
             <form onSubmit={handleSubmit}>
        <input  className="mt-4" type="email" name="email"></input>
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

export default Reusable_Form;