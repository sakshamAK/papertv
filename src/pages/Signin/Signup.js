import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./Signin.module.css"

export const Signup = () => {
  const [passwordType, setType] = useState("password");
    const [rePasswordType, setReType] = useState("password");
    const [toggleIcon, setToggleIcon] = useState("visibility_off");
    const [toggleReIcon, setToggleReIcon] = useState("visibility_off");
    const togglePassword = () => {
      if (passwordType === "password") {
        setType("text")
        setToggleIcon("visibility")
      }
      else {
        setType("password")
        setToggleIcon("visibility_off")
      }
    }
    
    const toggleRePassword = () => {
      if (rePasswordType === "password") {
        setReType("text")
        setToggleReIcon("visibility")
      }
      else {
        setReType("password")
        setToggleReIcon("visibility_off")
      }
    }
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
        <div className={`${styles.passVis} input-grp`}>
          <label htmlFor="password">Enter your password</label>
          <input type={passwordType} className="pwd" placeholder="Password" name="password" />
          <i className={`${styles.passwordVisibility} material-icons`} onClick={() => togglePassword()} >{toggleIcon}</i>
        </div>
        <div className={`${styles.passVis} input-grp`}>
          <label htmlFor="repassword">Re-enter your password</label>
          <input type={rePasswordType} className="pwd" placeholder="Re-enter password" name="repassword" />
          <i className={`${styles.passwordVisibility} material-icons`} onClick={() => toggleRePassword()} >{toggleReIcon}</i>
        </div>
        <input type = "submit" value = "Sign Up" className = {`${styles.signInButton}`} />
        <p>Already have an Account? <Link to = "/signin">Sign In</Link></p>
      </form>
    </div>
  )
}
