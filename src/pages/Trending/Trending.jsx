import React from 'react'
import { VideoThumbnail } from '../../components'
import { useVideoData } from '../../contexts'

export const Trending = () => {
    const { videoData } = useVideoData()
    return (
        <div className="videoListing">
            <h1>Trending Videos</h1>
            <div className="videoContainer">
                {videoData.map(video => (
                    <VideoThumbnail video = {video} />
                ))}
            </div>
        </div>
    )
}
