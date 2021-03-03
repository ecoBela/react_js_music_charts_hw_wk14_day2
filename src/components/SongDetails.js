import React, { Fragment } from 'react';

const SongDetails = ({songObject, handleSelectedSong}) =>{

    const handleClick = () => {handleSelectedSong(songObject.id)}

    return(
        <Fragment>
            <li onClick={handleClick}>
                <span>{songObject.index}. </span>
                <span>{songObject.title} - </span>
                <span> {songObject.artist}</span>
            </li>
        </Fragment>
    )
}

export default SongDetails;