import React, { useEffect, useRef } from "react";

const Ref_form = () => {

    const nameRef = useRef(null) ;
    const emailRef = useRef(null) ;

    useEffect( () =>{
        emailRef.current.focus();
    },[])

    const handleSubmit = e =>{
        e.preventDefault()  ;
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        
        
    }
  return (


    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} className="mt-4" type="email" name="email"></input>
        <br></br>
        <input
        ref={nameRef}
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

export default Ref_form;
