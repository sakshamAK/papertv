import React from 'react'
import styles from "./CoverContent.module.css"

export const CoverContent = () => {
    return (
        <div className={`${styles.coverimg}`} >
            <img className = "img-resp" src="./assets/coverImgEgg.jpg" alt="eggcarving" />
            <div className={`${styles.heading}`}>
                <h1>TRENDING NOW</h1>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sx </p>
                <button className = "btn">VISIT CHANNEL</button>
            </div>
        </div>
    )
}
