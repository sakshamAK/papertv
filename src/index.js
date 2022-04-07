import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoDataProvider } from "./contexts"
import { AuthProvider, WatchLaterAndLikesProvider } from "./contexts/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoDataProvider>
          <WatchLaterAndLikesProvider>
              <App />
          </WatchLaterAndLikesProvider>
        </VideoDataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
