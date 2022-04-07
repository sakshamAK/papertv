import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Signin.module.css"

export const Signup = () => {
  return (
    <div className={`${styles.signinSignup} videoListing`}>
      <h1 className={`${styles.heading}`}>SIGN UP</h1>
      <form className={`${styles.signInContainer} form-grp`}>
        <div className="input-grp">
          <label htmlFor="text">Enter your firstname</label>
          <input type="text" className="txt" placeholder="John" name="firstname" />
        </div>
        <div className="input-grp">
          <label htmlFor="text">Enter your lastname</label>
          <input type="text" className="txt" placeholder="Doe" name="lastname" />
        </div>
        <div className="input-grp">
          <label htmlFor="email">Enter your email</label>
          <input type="email" className="txt" placeholder="Johndoe@gmail.com" name="email" />
        </div>
        <div className="input-grp">
          <label htmlFor="password">Enter your password</label>
          <input type="Password" className="pwd" placeholder="Password" name="password" />
        </div>
        <div className="input-grp">
          <label htmlFor="repassword">Re-enter your password</label>
          <input type="Password" className="pwd" placeholder="Re-enter password" name="repassword" />
        </div>
        <input type = "submit" value = "Sign Up" className = {`${styles.signInButton}`} />
        <p>Already have an Account? <Link to = "/signin">Sign In</Link></p>
      </form>
    </div>
  )
}
