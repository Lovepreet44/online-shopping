import React, { useState } from "react";
import FormInput from "../form-input/form-input.component"
import "./sign-in.scss";
import CustomButton from "../custom-button/custom-button.component";
const Signin = () => {

 const[values,setValues]=useState(
   {
     email:" ",
     password:" ",
   }
 );
  
  const handleSubmit=(event)=>{
  event.preventDefault();
 // alert(values.email)
  setValues({email:" ",password:" "});

  }
  const changeHandler=(event)=>{
    const {name,value}=event.target;
    setValues({[name]:value})
  }
  return (
    <div className="sign-in">
      <h1>Already have an account</h1>

      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" value={values.email} changeHandler={changeHandler} />
        <label>Email</label>
        <FormInput type="password" name="password" value={values.password} changeHandler={changeHandler} />
        <label>Pssword</label>
        <CustomButton type="submit" >Sign In</CustomButton>
          
      </form>
    </div>
  );
};
export default Signin;
