import React, { Fragment } from 'react';
import SongDetails from './SongDetails';

const SongList = ({songs, loaded}) =>{
    
    if(!loaded){return <p>Loading....</p>}

    const songNodes = songs.map((song) => {return(
        <SongDetails songObject={{
            title: song.title.label,
            id: song.id.attributes['im:id']    
        }} />
    )})

    return(
        <Fragment>
            <p>This will contain song details</p>
            <ul>
               {songNodes}
            </ul>
            
            
        </Fragment>
    )
};

export default SongList;