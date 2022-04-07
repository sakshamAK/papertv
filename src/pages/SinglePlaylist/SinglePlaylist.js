import React from "react";
import { useParams } from "react-router-dom";
import { VideoThumbnail } from "../../components/videoThumbnail/VideoThumbnail";
import { useFeatures } from "../../contexts";
import styles from "./SinglePlaylist.module.css";

export const SinglePlaylist = () => {
  const { state, removeVideoFromPlaylist } = useFeatures();
  const { id } = useParams();
  const myPlaylist = state.playlists?.find((item) => item._id === id);
  return (
    <div className="videoListing">
      <h1>{myPlaylist.title}</h1>
      <div className="videoContainer">
        {state[id].videos?.map((item) => (
          <div className = {`${styles.closeIconContainer}`}>
            <i className = "material-icons" onClick = {() => removeVideoFromPlaylist(myPlaylist._id, item._id)} >close</i>
            <VideoThumbnail video={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
