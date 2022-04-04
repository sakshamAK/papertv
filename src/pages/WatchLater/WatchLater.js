import React from 'react'
import { VideoThumbnail } from '../../components'
import { useWatchLater } from '../../contexts'

export const WatchLater = () => {
  const { watchLaterVideos } = useWatchLater()
  return (
    <div className="videoListing">
      <h1>Watch Later</h1>
      {watchLaterVideos?.map(({ _id, category, views, title, creator, thumbnail }) => (<VideoThumbnail _id={_id} category={category} views={views} title={title} creator={creator} thumbnail={thumbnail} />))}
    </div>
  )
}
