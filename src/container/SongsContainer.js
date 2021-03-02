import React, { Fragment, useEffect, useState } from 'react';
import SongList from '../components/SongList';

const SongsContainer = () => {

    const [song, setSong] = useState(1);
    const [loaded, setLoaded] = useState(false);

    const getSongs = () => {
        console.log("getting song info")
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSong(data))
    }

    useEffect(() => {
        getSongs()
    }, [])

    // useEffect( () => {
    //     getLaunch();
    // }, [selectedLaunchId])


    return(
        <>
        <h2>This will contain a list</h2>
        <SongList/>
        </>
    )
}

export default SongsContainer;