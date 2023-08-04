import React from 'react'

function Signup() {
  return (
    <div>
        {/* Sign up form */}
      <h1>Sign up Form</h1>
      <form onSubmit={printSignupDetails}>
        
        <input type='text' name="fname" placeholder='First name'></input>
        <input type='text' name="lname" placeholder='Last name'></input>
        <br></br>
        <input type='text' name="email" placeholder='Mobile number or email address' style={{width : "300px"}}></input>
        <br></br>
        <input type='password' name="password" placeholder='New password'></input>
        <br></br>
        <label htmlFor="dob">Date of birth : </label>
        <input type='date' name="date"></input>
        <br></br>
        Gender : 
        <input type='radio' id='male' name="gender" value="Male"></input>
        <label htmlFor="male">Male </label>
        <input type='radio' id='female' name="gender" value="Female"></input>
        <label htmlFor="female">Female </label>
        <input type='radio' id='other' name="gender" value="Other"></input>
        <label htmlFor="other">Other </label>
       
        <br></br>
        <input type='submit' name='submit'></input>
      </form>
    </div>
  )
}

function printSignupDetails(event) {
    event.preventDefault();
    let form = event.target
    console.log("Sign up Details");
    console.log(`First Name : ${form.elements["fname"].value}`);
    console.log(`Last Name : ${form.elements["lname"].value}`);
    console.log(`Email : ${form.elements["email"].value}`);
    console.log(`Password : ${form.elements["password"].value}`);
    console.log(`Date of birth : ${form.elements["date"].value}`);
    console.log(`Gender : ${form.elements["gender"].value}`);
  }

export default Signup