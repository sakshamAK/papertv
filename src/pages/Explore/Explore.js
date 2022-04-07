import React from 'react'
import { VideoThumbnail } from '../../components'
import { useVideoData } from '../../contexts'

export const Explore = () => {
    const { videoData } = useVideoData()
    return (
        <div className="videoListing">
            <h1>Explore</h1>
            <div className="videoContainer">
                {videoData.map(video => (
                    <VideoThumbnail video = {video} />
                ))}
            </div>
        </div>
    )
}
