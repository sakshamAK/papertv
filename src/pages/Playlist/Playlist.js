import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFeatures } from "../../contexts";
import styles from "./Playlist.module.css";

export const Playlist = () => {
  const { state, removeFromPlaylist } = useFeatures();
  const navigate = useNavigate();
  return (
    <div className="videoListing">
      <h1>Playlists</h1>
      <div className={`${styles.playlistContainer}`}>
        {state?.playlists.map((playlist) => (
          <div className={`${styles.thumbnailContainer}`} onClick = { () => navigate(`/playlist/${playlist._id}`) }>
            {/* <Link
              to={`/playlist/${playlist._id}`}
              className={`${styles.thumbnailContainer}`}
            > */}
              <i
                className="material-icons"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromPlaylist(playlist._id);
                }}
              >
                close
              </i>
              <h2>{playlist.title}</h2>
              <p>{playlist.description}</p>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};
