import React, { Fragment, useEffect, useState } from 'react';
import SongList from '../components/SongList';
import SongArtwork from '../components/SongArtwork';

const SongsContainer = () => {

    const [songs, setSongs] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [selectedSong, setSelectedSong] = useState({});

    const getSongs = () => {
        console.log("getting song info")
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        getSongs()
        setSelectedSong(songs[0])
    }, [])

    // song.find(( === id) => {})

    // setSelectedSong(songThatWeWant)
    // onClickSongDetail

    const handleSelectedSong = (id) => {
        setSelectedSong(
        songs.find((song) => (song.id.attributes['im:id'] == id))
        );
	};
    

    return(
        <>
        <h2>Chart List</h2>
        <SongList
        songs={songs}
        loaded={loaded} 
        handleSelectedSong={(id) => {handleSelectedSong(id)}}
        />
        <SongArtwork selectedSong={selectedSong} />
        </>
    )
}


export default SongsContainer;