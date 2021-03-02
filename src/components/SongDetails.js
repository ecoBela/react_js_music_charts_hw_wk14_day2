import React, { Fragment } from 'react';

const SongDetails = ({songObject}) =>{
    return(
        <Fragment>
            <li>
                <span>{songObject.index}. </span>
                <span>{songObject.title} - </span>
                <span> {songObject.artist}</span>
            </li>
        </Fragment>
    )
}

export default SongDetails;