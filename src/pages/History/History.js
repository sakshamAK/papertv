import React from "react";
import { VideoThumbnail } from "../../components";
import { useWatchLaterAndLikes } from "../../contexts";
import styles from "./History.module.css"

export const History = () => {
  const { state, removeFromHistory, clearHistory } = useWatchLaterAndLikes();
  return (
    <div className="videoListing">
      <div className = {`${styles.historyLabel}`}><h1>History</h1><button className = {`${styles.clearAll} btn`} onClick = {clearHistory}>Clear History</button></div>
      <div className="videoContainer">
        {state.history?.map((videoItem) => (
          <div className = {`${styles.removeCard}`}>
            <div><i className="material-icons" onClick = {() => removeFromHistory(videoItem)}>close</i></div>
            <VideoThumbnail video={videoItem} />
          </div>
        ))}
      </div>
    </div>
  );
};
