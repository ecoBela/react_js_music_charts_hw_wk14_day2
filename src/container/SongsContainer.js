import React, { Fragment, useEffect, useState } from 'react';
import SongList from '../components/SongList';

const SongsContainer = () => {

    const [songs, setSongs] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getSongs = () => {
        console.log("getting song info")
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        getSongs()
    }, [])


    return(
        <>
        <h2>Chart List</h2>
        <SongList
        songs={songs}
        loaded={loaded} 
        />
        </>
    )
}

export default SongsContainer;