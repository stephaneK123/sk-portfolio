import { Typography, Box, IconButton, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";
import Post from "../../components/sidebar/Post.jsx";
import axios from "axios";
// import AudioPLayer from "../../components/AudioPlayer";
const Socials = ({
  title = "Here is the spotify result",
  subtitle = "something went wrong",
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  var currenToken = localStorage.getItem("token");
  const [tracks, setTracks] = useState([]);

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + currenToken,
    },
  };

  useEffect(() => {
    currenToken = localStorage.getItem("token");
    axios
      .get(
        "https://api.spotify.com/v1/users/12132658213/playlists?limit=13",
        config
      )
      .then((response) => {
        console.log(response);
        // alert(JSON.Stringify(response));
      });
  }, [currenToken]);

  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Box mb="30px">
          <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
          >
            {title}
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[400]}>
            {subtitle}
          </Typography>
        </Box>
      </Box>

      <Post />
    </>
  );
};
export default Socials;
