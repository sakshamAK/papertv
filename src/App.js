import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header, SideBar } from "./components";
import { Explore, History, Home, Playlist, ProductCategories, Trending, WatchLater, Signin, Signup } from "./pages";
import Mockman from "mockman-js"
import { LikedVideos } from "./pages/LikedVideos/LikedVideos";
import { PrivateRoute } from "./PrivateRoute";
import { VideoPlayer } from "./components/VideoPlayerSPA/VideoPlayer";
import { SinglePlaylist } from "./pages/SinglePlaylist/SinglePlaylist";

function App() {
  return (
    <>
      <Header />
      <div className="gridContent">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/:categoryName" element={<ProductCategories />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
          <Route path="/mockman" element={<Mockman />} />

          <Route element={<PrivateRoute />}>
            <Route path="/history" element={<History />} />
            <Route path="/watch-later" element={<WatchLater />} />
            <Route path="/playlists" element={<Playlist />} />
            <Route path="/playlist/:id" element={<SinglePlaylist />} />
            <Route path="/liked-videos" element={<LikedVideos />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
