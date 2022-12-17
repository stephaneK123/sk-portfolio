import React, { useState, useRef, useEffect, Box } from "react";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MyImage2 from "../assets/MacMiller_LiveFromSpace.png";
import Typography from "@mui/material/Typography";
import { useTheme, IconButton } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";

export default function AudioPLayer({
    currentTrack,
    currentIndex,
    setCurrentIndex,
    total,
}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    var audioSrc = total[currentIndex]?.track.preview_url;

    const audioRef = useRef(new Audio(total[0]?.track.preview_url));

    const intervalRef = useRef();

    const isReady = useRef(false);

    const { duration } = audioRef.current;

    const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                handleNext();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    useEffect(() => {
        if (audioRef.current.src) {
            if (isPlaying) {
                audioRef.current.play();
                startTimer();
            } else {
                clearInterval(intervalRef.current);
                audioRef.current.pause();
            }
        } else {
            if (isPlaying) {
                audioRef.current = new Audio(audioSrc);
                audioRef.current.play();
                startTimer();
            } else {
                clearInterval(intervalRef.current);
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);

        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            isReady.current = true;
        }
    }, [currentIndex]);

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    const handleNext = () => {
        if (currentIndex < total.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else setCurrentIndex(0);
    };

    const handlePrev = () => {
        if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
        else setCurrentIndex(currentIndex - 1);
    };

    const addZero = (n) => {
        return n > 9 ? "" + n : "0" + n;
    };
    const artists = [];
    currentTrack?.album?.artists.forEach((artist) => {
        artists.push(artist.name);
    });


    return (
        <Box>
            {/* <Card raised sx={{
                display: 'flex', maxWidth: 300,

            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {currentTrack?.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">

                            {artists.join(" | ")}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous" >
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    height="250"
                    sx={{ padding: "1em 1em 1em 1em", objectFit: "contain" }}
                    image={currentTrack?.album?.images[0]?.url}
                    alt="Live from space album cover"
                />
            </Card> */}
        </Box>
    );
}
