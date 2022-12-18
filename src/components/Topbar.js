import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Box, IconButton, useTheme, Stack, Grid, Button, useScrollTrigger } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import ReadTime from "./ReadTime";
import SeeNotfication from "./SeeNotifications";
import DancingText from "./DancingText";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { tokens } from "../theme";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MyImage2 from "../assets/MacMiller_LiveFromSpace.png";
import { setClientToken } from "../dt/remote/spotifyFetch";
import { loginEndpoint } from "../dt/remote/spotifyFetch";
import { useLocation } from "react-router-dom";
// import AudioPLayer from "./AudioPlayer";
import apiClient from "../dt/remote/spotifyFetch";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    width: "100%",
    // Override media queries injected by theme.mixins.toolbar
    "@media all": {
        minHeight: 128
    }
}));

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary
// }));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 50,
    width: 120,
    lineHeight: '60px',
}));

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#5995B1",
    "&:hover": {
        backgroundColor: "#5995B1"
    },
    height: "50%",
    marginTop: 2,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    textAlign: "center",
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    }
}));

const Login = () => {
    return (
        <Box display="flex" m={1} borderRadius={"20px"}>
            <div className="login-page" >
                <img
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                    alt="logo-spotify"
                    height={400}
                    width={800}
                    className="logo"
                />
                <a href={loginEndpoint}>
                    <div className="login-btn">LOG IN</div>
                </a>
            </div>
        </Box>
    );
}

export default function ProminentAppBar({ total, dest = "Home" }) {
    //colors and theme
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    //grab token for spotify API
    const [token, setToken] = useState("");
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if (!token && hash) {
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token);
        } else {
            setToken(token);
            setClientToken(token);
        }


    }, [token]);

    //get the spotify data
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        apiClient
            .get("playlists/0H9EekEFftvy58egALyQQH/tracks")
            .then((res) => {
                console.log(res)

                setTracks(res.data.items);
                setCurrentTrack(res.data?.items[0]?.track);
            });
        console.log("state = " + location.state);
    }, [location.state]);

    useEffect(() => {
        setCurrentTrack(tracks[currentIndex]?.track);

    }, [currentIndex, tracks]);

    //get current track information 
    const artists = [];
    currentTrack?.album?.artists.forEach((artist) => {
        artists.push(artist.name);
    });

    return !token ? (
        <Login />
    ) : (
        <Box display="flex" m={1} borderRadius={"20px"}>
            <AppBar position="static">
                <StyledToolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="space-between" p={2}>
                                <Typography
                                    variant="h1"
                                    noWrap
                                    component="div"
                                    sx={{ flexGrow: 1, alignSelf: "flex-end" }}
                                >
                                    {dest}
                                </Typography>

                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Where to ?"
                                        inputProps={{ "aria-label": "search" }}
                                    />
                                </Search>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={"hello"}
                                    aria-haspopup="true"

                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>

                                <IconButton
                                    size="large"
                                    aria-label="display more actions"
                                    edge="end"
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="space-between" p={2}>
                                <Grid item xs={4}>
                                    <ReadTime></ReadTime>
                                </Grid>
                                <Item elevation={3} >
                                    <DancingText></DancingText>
                                </Item>


                                <Box m={2} display={"grid"}>
                                    <Button
                                        sx={{
                                            backgroundColor: colors.blueAccent[700],
                                            color: colors.grey[100],
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                                        Download Resume
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={8} marginTop={8}>
                            {/* <AudioPLayer /> */}
                            <Box>
                                <Card raised sx={{
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
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}
