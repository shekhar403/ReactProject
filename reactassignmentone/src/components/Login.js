import React from 'react'

function Login() {
    return (
        <div>
            {/* Login Form */}
            <h1>Log in Form</h1>

            <form onSubmit={printLoginDetails}>
                <label htmlFor="mail">Email : </label>
                <br></br>
                <input type='text' id="mail" name="email" placeholder='Enter your Email'></input>
                <br></br>
                <label htmlFor="password">Password : </label>
                <br></br>
                <input type='password' id="password" name="password" placeholder='Enter your password'></input>
                <br></br>
                <input type='submit' name='submit'></input>
            </form>
        </div>
    )
}

function printLoginDetails(event) {
    event.preventDefault();
    let form = event.target
    console.log("Login Details");
    console.log(`Email : ${form.elements["email"].value}`);
    console.log(`Password : ${form.elements["password"].value}`);
}

export default Login