"use client"
import { useRef } from 'react';
import { Paper } from '@mui/material';

export default function VideoPlayer(){
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <Paper elevation={3} className="w-full p-4 ">
            <video ref={videoRef} controls className="w-full">
                <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="flex justify-center mt-4 w-full">
                <button
                    onClick={handlePlay}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                    Play
                </button>
                <button
                    onClick={handlePause}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                    Pause
                </button>
            </div>
        </Paper>
    );
};