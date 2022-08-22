import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth, useVideoData, useFeatures } from "../../contexts";
import styles from "./VideoPlayer.module.css";

export const VideoPlayer = () => {
  const { id } = useParams();
  const { videoData } = useVideoData();
  const {
    toggleWatchLaterVideo,
    state,
    addToLikedVideos,
    addToPlaylist,
    removeFromPlaylist,
    title,
    description,
    setTitle,
    setDescription,
    addVideoToPlaylist,
  } = useFeatures();
  const { isAuth } = useAuth();
  const videoItem = videoData?.find((video) => video.id === id);
  const [showPlaylist, setPlaylistMode] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`${styles.SPVideogrid} videoListing`}>
      <iframe
        className={`${styles.embededPlayer}`}
        src={videoItem.src}
        frameBorder="0"
        allow="autoplay"
      ></iframe>
      <div className={`${styles.actionButtons}`}>
        <img src = "https://picsum.photos/40/40" />
        <h4>{videoItem.title}</h4>
        <div className={`${styles.actionIcons}`}>
          <i
            className="material-icons"
            title="watch later"
            onClick={() => addToLikedVideos(videoItem)}
          >
            {state.likes?.find((item) => item._id === videoItem._id)
              ? "favorite"
              : "favorite_border"}
          </i>
          <i
            className={
              state.watchLater?.find((item) => item._id === videoItem._id)
                ? "material-icons"
                : "material-icons-outlined"
            }
            title="Like video"
            onClick={() => toggleWatchLaterVideo(videoItem)}
          >
            watch_later
          </i>
          <i
            className="material-icons"
            onClick={() => setPlaylistMode(showPlaylist ? false : true)}
          >
            playlist_add
          </i>
        </div>
        {showPlaylist && (
          <div className={`${styles.addPlaylist}`}>
            <h3>Add To Playlist</h3>
            <input
              className={`${styles.playlistInp}`}
              type="text"
              placeholder="Enter title of your playlist"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className={`${styles.playlistInp}`}
              type="text"
              placeholder="Write a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              className={`${styles.playlistBtn} btn`}
              onClick={() => (isAuth ? addToPlaylist() : navigate("/signin"))}
            >
              Create New Playlist
            </button>
            <hr />
            <ul className={`${styles.createdPlaylists}`}>
              {state?.playlists.map((playlist) => (
                <li onClick={() => addVideoToPlaylist(playlist._id, videoItem)}>
                  <p>{playlist.title}</p>
                  <i
                    className="material-icons"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromPlaylist(playlist._id);
                    }}
                  >
                    close
                  </i>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <aside className={`${styles.sideList}`}>
        <h3>More Videos: </h3>
        {videoData.map((videoElement) => (
          <div key={videoElement.id} className={`${styles.sideListCard} card`}>
            <div className={`${styles.sideListItem} horiz`}>
              <img
                className={`${styles.horizImg}`}
                src={videoElement.thumbnail}
                alt={videoElement.category}
              />
              <div className={`${styles.vertText} vert-txt`}>
                <h5>{videoElement.title}</h5>
                <p> {videoElement.creator}</p>
              </div>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
};
