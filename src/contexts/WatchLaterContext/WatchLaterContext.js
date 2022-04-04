import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import axios from "axios";
import { watchlaterReducer } from "../../redux";

const WatchLaterContext = createContext(null)

const useWatchLater = () => useContext(WatchLaterContext)

const initState = {
    video: {}
}

const WatchLaterProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(watchlaterReducer, initState);
    const [ watchLaterVideos, setWatchLaterVideos ] = useState();
    const { token } = useAuth();

    useEffect(() => {
        if(token) {
            (async () => {
                const headerBody = {
                    headers: {
                        "authorization": token
                    }
                }
                try {
                    const getWatchList = await axios.get("/api/user/watchLater", headerBody)
                    setWatchLaterVideos(getWatchList.data.watchLater);
                }
                catch (err) {
                    console.log(err)
                }
                
            })();
        }

    }, [token]);

    return (
        <WatchLaterContext.Provider value={{ watchLaterVideos, state, dispatch }}>
            {children}
        </WatchLaterContext.Provider>
    )
}

export { useWatchLater, WatchLaterProvider }