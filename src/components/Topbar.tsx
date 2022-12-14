import * as React from "react";
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


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(15),
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



export default function ProminentAppBar({ dest = "Home" }) {
    const theme = useTheme(); 
    const colors = tokens(theme.palette.mode);
    return (
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
                        <Grid item xs={4}>
                            <ReadTime></ReadTime>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={3}>
                                <DancingText></DancingText>
                            </Item>

                        </Grid>
                        <Grid item xs={4}>
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
                        </Grid>
                    </Grid>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}
