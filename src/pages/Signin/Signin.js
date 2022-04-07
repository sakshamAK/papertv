import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import styles from "./Signin.module.css";

export const Signin = () => {
  const { email, setEmail, password, setPassword, setCredentials } = useAuth();
  const [passwordType, setType] = useState("password");
  const [toggleIcon, setToggleIcon] = useState("visibility_off");
  const togglePassword = () => {
    if (passwordType === "password") {
      setType("text");
      setToggleIcon("visibility");
    } else {
      setType("password");
      setToggleIcon("visibility_off");
    }
  };

  return (
    <div className={`${styles.signinSignup} videoListing`}>
      <h1 className={`${styles.heading}`}>SIGN IN</h1>
      <form className={`${styles.signInContainer} form-grp`}>
        <div className="input-grp">
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            value={email}
            className="txt"
            placeholder="Johndoe@gmail.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={`${styles.passVis} input-grp`}>
          <label htmlFor="password">Enter your password</label>
          <input
            type={passwordType}
            value={password}
            className="pwd"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={`${styles.passwordVisibility} material-icons`}
            onClick={() => togglePassword()}
          >
            {toggleIcon}
          </i>
          <div className={`${styles.forgotPassword}`}>
            Forgot password?
          </div>
        </div>
        <input
          type="submit"
          value="Sign In"
          className={`${styles.signInButton}`}
          onClick={(e) => setCredentials(e)}
        />
        <p>
          Don't have an Account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};
