import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext/AuthContext'
import styles from "./Signin.module.css"

export const Signin = () => {

  const { email, setEmail, password, setPassword, setCredentials } = useAuth();
  

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
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-grp">
          <label htmlFor="password">Enter your password</label>
          <input
            type="Password"
            value={password}
            className="pwd"
            placeholder="Password"
            name="password"
            onChange={e => setPassword(e.target.value)} />
          <Link className={`${styles.forgotPassword}`} to="/signup">Forgot password?</Link>
        </div>
        <input type="submit" value="Sign In" className={`${styles.signInButton}`} onClick={ e => setCredentials(e) } />
      </form>
    </div>
  )
}
