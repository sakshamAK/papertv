import React from 'react'
import { useWatchLater } from '../../contexts'
import { addToWatchLater } from '../../redux/watchlistReducer/actions';
import styles from "./VideoThumbnail.module.css"

export const VideoThumbnail = ({ _id, thumbnail, category = "", title = "", views = "", creator = "" }) => {
    const { dispatch } = useWatchLater();
    return (
        <div className={`${styles.thumbnailContainer}`} key={_id} >
            <img className="img-resp" src={thumbnail} alt={category} title={title} />
            <h4>{title}</h4>
            {category !== "" ? <h4>{category}</h4> : ""}
            {views !== "" ? <p>{views} views | {creator}</p> : ""}
            {views !== "" ? <button className={`${styles.watchList}`} title="watch later"><i className="material-icons" onClick={() => dispatch(addToWatchLater({ _id, thumbnail, category, title, views, creator }))} >watch_later</i></button> : ""}
        </div>
    )
}
