import React, { Fragment } from 'react';

const SongDetails = ({songObject}) =>{
    return(
        <Fragment>
            <p>{songObject.index}</p>
            <p>{songObject.title}</p>
            <p>{songObject.artist}</p>
        </Fragment>
    )
}

export default SongDetails;