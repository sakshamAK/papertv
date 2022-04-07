import React from "react";
import { useParams } from "react-router-dom";
import { useWatchLaterAndLikes } from "../../contexts";
import styles from "./SinglePlaylist.module.css"

export const SinglePlaylist = () => {
  const { state } = useWatchLaterAndLikes();
  const { id } = useParams();
  const myPlaylist = state.playlists?.find(item => item._id === id);
  return (
    <div className="videoListing">
      <h1>{myPlaylist.title}</h1>
      <div className="videoContainer">
        
      </div>
    </div>
  );
};
