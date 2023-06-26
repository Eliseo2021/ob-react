import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../../services/axiosService' 
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ChuckNorrisJokes = () => {
    const [joke, setJoke] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        generateJoke();
    }, []);

    const generateJoke = () => {
        getRandomJoke()
            .then((response) => {
                if (response.status === 200) {
                    setJoke(response.data.value);
                }
            })
            .catch((error) => {
                console.error('Error fetching joke:', error);
            });
    }

    const handleLike = () => {
        setLikes(likes + 1);
    }

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    }

    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <Button variant="contained" onClick={generateJoke}>Get a new joke</Button>
            {joke && (
                <div>
                    <p>{joke}</p>
                    <Button variant="contained" onClick={handleLike} startIcon={<ThumbUpIcon />}>Like</Button>
                    <Button variant="contained" onClick={handleDislike} startIcon={<ThumbDownIcon />}>Dislike</Button>
                </div>
            )}
            <p>Likes: {likes}</p>
            <p>Dislikes: {dislikes}</p>
        </div>
    );
}

export default ChuckNorrisJokes;
