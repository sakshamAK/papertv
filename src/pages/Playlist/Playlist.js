import React from 'react'
import { Link } from 'react-router-dom';
import { useWatchLaterAndLikes } from '../../contexts';
import styles from "./Playlist.module.css"

export const Playlist = () => {
  const { state, removeFromPlaylist } = useWatchLaterAndLikes();
  return (
    <div className="videoListing">
      <h1>Playlists</h1>
      <div className={`${styles.playlistContainer}`}>
        {state?.playlists.map(playlist => (
          <Link to = {`/playlist/${playlist._id}`} className={`${styles.thumbnailContainer}`}>
            <i className="material-icons" onClick={(e) => {e.stopPropagation(); removeFromPlaylist(playlist._id)}}>close</i>
            <h2>{playlist.title}</h2>
            <p>{playlist.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
