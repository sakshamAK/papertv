import { useContext, createContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const AuthContext = createContext(null)

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState("adarshbalika@gmail.com")
    const [password, setPassword] = useState("adarshBalika")
    const [token, setToken] = useState();
    const [isAuth, setAuth] = useState(false);
    const navigate = useNavigate();

    const setCredentials = async (e) => {
        try {

            e.preventDefault();
            const axiosBody = { email, password }

            const res = await axios.post("/api/auth/login", axiosBody)
            localStorage.setItem("token",JSON.stringify(res.data.encodedToken))
            setToken(res.data.encodedToken)
            setAuth(true)
            navigate("/");
        }
        catch (err) {
            console.error(err)
            setAuth(false)
        }
    }
    return (
        <AuthContext.Provider value={{ setCredentials, email, password, setEmail, setPassword, token, isAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider }