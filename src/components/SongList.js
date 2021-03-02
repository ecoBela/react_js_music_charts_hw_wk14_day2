import React, { Fragment } from 'react';
import SongDetails from './SongDetails';

const SongList = ({songs, loaded}) =>{
    
    if(!loaded){return <p>Loading....</p>}

    const songNodes = songs.map((song, index) => {return(
        <SongDetails 
        songObject={
            {
            title: song['im:name'].label, 
            artist: song['im:artist'].label,
            id: song.id.attributes['im:id'], 
            index: index + 1   
        }
        } 
        key={song.id.attributes['im:id']}
        />
    )})

    return(
        <Fragment>
            <ul>
               {songNodes}
            </ul>
        </Fragment>
    )
};

export default SongList;