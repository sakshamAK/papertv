import React from "react";
import { VideoThumbnail } from "../../components";
import { useFeatures } from "../../contexts";

export const WatchLater = () => {
  const {
    state: { watchLater },
  } = useFeatures();
  return (
    <div className="videoListing">
      <h1>Watch Later</h1>
      <div className="videoContainer">
        {watchLater?.map((video) => (
          <VideoThumbnail video={video} />
        ))}
      </div>
    </div>
  );
};
