import {
  ADD_TO_HISTORY,
  ADD_TO_LIKED_VIDEOS,
  ADD_TO_PLAYLIST,
  ADD_TO_WATCHLATER,
  ADD_VIDEO_TO_PLAYLIST,
  REMOVE_FROM_HISTORY,
  REMOVE_FROM_LIKED_VIDEOS,
  REMOVE_FROM_PLAYLIST,
  REMOVE_FROM_WATCHLATER,
  REMOVE_VIDEO_FROM_PLAYLIST,
} from "./action-types";

export const featuresReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_WATCHLATER: {
      return { ...state, watchLater: payload.watchLater };
    }

    case REMOVE_FROM_WATCHLATER: {
      return { ...state, watchLater: payload.watchLater };
    }

    case ADD_TO_LIKED_VIDEOS: {
      return { ...state, likes: payload.likes };
    }

    case REMOVE_FROM_LIKED_VIDEOS: {
      return { ...state, likes: payload.likes };
    }

    case ADD_TO_PLAYLIST: {
      return { ...state, playlists: payload.playlists };
    }

    case REMOVE_FROM_PLAYLIST: {
      return { ...state, playlists: payload.playlists };
    }

    case ADD_VIDEO_TO_PLAYLIST: {
      return { ...state, [payload.playlistId]: payload.playlist };
    }

    case REMOVE_VIDEO_FROM_PLAYLIST: {
      return { ...state, [payload.playlistId]: payload.playlist };
    }

    case ADD_TO_HISTORY: {
      return { ...state, history: payload.history };
    }

    case REMOVE_FROM_HISTORY: {
      return { ...state, history: payload.history };
    }
  }
};
