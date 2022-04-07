import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { useAuth } from "../AuthContext/AuthContext";
import axios from "axios";
import { featuresReducer } from "../../redux";
import {
  ADD_TO_WATCHLATER,
  REMOVE_FROM_WATCHLATER,
  ADD_TO_LIKED_VIDEOS,
  REMOVE_FROM_LIKED_VIDEOS,
  ADD_TO_PLAYLIST,
  REMOVE_FROM_PLAYLIST,
  ADD_TO_HISTORY,
  REMOVE_FROM_HISTORY,
  ADD_VIDEO_TO_PLAYLIST,
  REMOVE_VIDEO_FROM_PLAYLIST,
} from "../../redux/watchlistReducer/action-types";
import { Navigate, useNavigate } from "react-router-dom";

const WatchLaterAndLikesContext = createContext(null);

const useFeatures = () => useContext(WatchLaterAndLikesContext);

const initState = {
  watchLater: [],
  likes: [],
  playlists: [],
  history: [],
};

const FeaturesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(featuresReducer, initState);
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const toggleWatchLaterVideo = async (video) => {
    if (isAuth) {
      try {
        if (
          state.watchLater?.find((currVideo) => currVideo._id === video._id)
        ) {
          const { data } = await axios.delete(
            `/api/user/watchLater/${video._id}`,
            { headers: { authorization: token } }
          );

          dispatch({
            type: REMOVE_FROM_WATCHLATER,
            payload: { watchLater: data.watchLater },
          });
        } else {
          const { data } = await axios.post(
            "/api/user/watchLater",
            { video },
            { headers: { authorization: token } }
          );

          dispatch({
            type: ADD_TO_WATCHLATER,
            payload: { watchLater: data.watchLater },
          });
        }
      } catch (err) {
        console.error(err);
      }
    } else navigate("/signin");
  };

  const addToLikedVideos = async (video) => {
    if (isAuth) {
      try {
        if (state.likes?.find((currVideo) => currVideo._id === video._id)) {
          const { data } = await axios.delete(`/api/user/likes/${video._id}`, {
            headers: { authorization: token },
          });

          dispatch({
            type: REMOVE_FROM_LIKED_VIDEOS,
            payload: { likes: data.likes },
          });
        } else {
          const { data } = await axios.post(
            "/api/user/likes",
            { video },
            { headers: { authorization: token } }
          );

          dispatch({
            type: ADD_TO_LIKED_VIDEOS,
            payload: { likes: data.likes },
          });
        }
      } catch (err) {
        console.error(err);
      }
    } else navigate("/signin");
  };

  const addToPlaylist = async () => {
    try {
      const {
        data: { playlists },
      } = await axios.post(
        "/api/user/playlists",
        { playlist: { title, description } },
        { headers: { authorization: token } }
      );

      dispatch({
        type: ADD_TO_PLAYLIST,
        payload: { playlists },
      });
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  const addVideoToPlaylist = async (playlistId, video) => {
    if (token) {
      try {
        const {
          data: { playlist },
        } = await axios.post(
          `/api/user/playlists/${playlistId}`,
          { video },
          {
            headers: { authorization: token },
          }
        );
        dispatch({
          type: ADD_VIDEO_TO_PLAYLIST,
          payload: { playlist, playlistId },
        });
        console.log(playlist);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const removeVideoFromPlaylist = async (playlistId, videoId) => {
    if (token) {
      try {
        const {
          data: { playlist },
        } = await axios.delete(
          `/api/user/playlists/${playlistId}/${videoId}`,
          {
            headers: { authorization: token },
          }
        );
        dispatch({
          type: REMOVE_VIDEO_FROM_PLAYLIST,
          payload: { playlist, playlistId },
        });
        // console.log(playlist, video);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const removeFromPlaylist = async (playlistId) => {
    try {
      const {
        data: { playlists },
      } = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: { authorization: token },
      });

      dispatch({
        type: REMOVE_FROM_PLAYLIST,
        payload: { playlists },
      });
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  const addToHistory = async (video) => {
    if (token) {
      try {
        const {
          data: { history },
        } = await axios.post(
          "/api/user/history",
          { video },
          { headers: { authorization: token } }
        );

        dispatch({
          type: ADD_TO_HISTORY,
          payload: { history },
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const removeFromHistory = async (video) => {
    if (token) {
      try {
        const {
          data: { history },
        } = await axios.delete(`/api/user/history/${video._id}`, {
          headers: { authorization: token },
        });

        dispatch({
          type: REMOVE_FROM_HISTORY,
          payload: { history },
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const clearHistory = async () => {
    if (token) {
      try {
        const {
          data: { history },
        } = await axios.delete("/api/user/history/all", {
          headers: { authorization: token },
        });

        dispatch({
          type: REMOVE_FROM_HISTORY,
          payload: { history },
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (token) {
      (async () => {
        const headerBody = {
          headers: {
            authorization: token,
          },
        };
        try {
          const {
            data: { watchLater },
          } = await axios.get("/api/user/watchLater", headerBody);
          console.log(watchLater);
          dispatch({
            type: ADD_TO_WATCHLATER,
            payload: { watchLater },
          });

          const {
            data: { likes },
          } = await axios.get("/api/user/likes", headerBody);
          dispatch({
            type: ADD_TO_LIKED_VIDEOS,
            payload: { likes },
          });

          const {
            data: { playlists },
          } = await axios.get("/api/user/playlists", {
            headers: { authorization: token },
          });
          dispatch({
            type: ADD_TO_PLAYLIST,
            payload: { playlists },
          });
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [token]);

  return (
    <WatchLaterAndLikesContext.Provider
      value={{
        state,
        dispatch,
        toggleWatchLaterVideo,
        addToLikedVideos,
        addToPlaylist,
        removeFromPlaylist,
        title,
        description,
        setTitle,
        setDescription,
        addToHistory,
        removeFromHistory,
        clearHistory,
        addVideoToPlaylist,
        removeVideoFromPlaylist,
      }}
    >
      {children}
    </WatchLaterAndLikesContext.Provider>
  );
};

export { useFeatures, FeaturesProvider };
