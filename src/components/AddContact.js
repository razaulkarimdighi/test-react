import React, { Component, useEffect, useState } from "react";

export default function AddContact() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState(17);

  function increaseAge(e){
    setAge(age+1);
    e.preventDefault();
    
  }



useEffect(() => {
  console.log(age);
  
},[age])






  return (
    <form>
      {
        age>=18 ?
        <div>
        <h1>{age}</h1>
        
        <input type="email"  placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter Password"/>
        <button type="submit">Submit</button>
      </div> :
      <h1>You are kid!</h1>
      }
      <button onClick={increaseAge}>Increase</button><br></br>
    </form>
  );
}
