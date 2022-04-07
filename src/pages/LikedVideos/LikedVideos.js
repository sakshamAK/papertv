import React from "react";
import { VideoThumbnail } from "../../components";
import { useFeatures } from "../../contexts";

export const LikedVideos = () => {
  const {
    state: { likes },
  } = useFeatures();
  return (
    <div className="videoListing">
      <h1>Liked Videos</h1>
      <div className="videoContainer">
        {likes?.map((video) => (
          <VideoThumbnail video={video} />
        ))}
      </div>
    </div>
  );
};
