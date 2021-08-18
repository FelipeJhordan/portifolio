import React from 'react'
import './styles.css'

const Photo = ({src, desc, photoName}) => {


    return (
        <>
            <div className="container-photo">
                <img className="photo" src={src} alt={desc || "photo"}></img>
            </div>
            <div className="wrapper-name">
                <span>{photoName}</span>
            </div>
        </>
    )
}


export default Photo

