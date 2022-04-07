import React from 'react'
import { VideoThumbnail } from '../../components'
import { useWatchLaterAndLikes } from '../../contexts'

export const LikedVideos = () => {
  const { state: { likes } } = useWatchLaterAndLikes()
  return (
    <div className="videoListing">
      <h1>Liked Videos</h1>
      <div className="videoContainer" >
        {likes?.map(video => (<VideoThumbnail video={video} />))}
      </div>
    </div>)
}
