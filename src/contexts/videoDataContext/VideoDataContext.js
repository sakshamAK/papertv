import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideoDataContext = createContext(null);
const useVideoData = () => useContext(VideoDataContext);

const getVideoData = async () => {
    const res = await axios.get("/api/videos");
    const data = res.data;
    return data.videos;
}

const getCategoriesData = async () => {
    const res = await axios.get("/api/categories");
    const data = res.data;
    return data.categories;
}

const VideoDataProvider = ({ children }) => {
    const [ videoData, setVideoData ] = useState([])
    const [ categoryData, setCategoryData ] = useState([])
    useEffect(() => {
        (async () => {
            setVideoData(await getVideoData());
            setCategoryData(await getCategoriesData());
        })();

    }, [])
    return (
        <VideoDataContext.Provider value = {{videoData, categoryData}}>
            { children }
        </VideoDataContext.Provider>
    )
}

export { useVideoData, VideoDataProvider }