import {
  Grid,
  Box,
  IconButton,
  useTheme,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SeeNotfication from "../../components/SeeNotifications";
import Container from "@mui/material/Container";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import Sliders from "./Sliders";
import PicList from "../../components/PicList";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]} word>
        {subtitle}
      </Typography>
    </Box>
  );
};

const Home = ({ title = "You are Home", subtitle = "welcome fool" }) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const CoolCard = () => {
    <Box flex={1} m="0 30px">
      <Card sx={{ margin: 1 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>;
  };

  return (
    <Box m={1}>
      {/* intro */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Stephane K"
          subtitle="I like to build things, and sometimes they work. Someone told me I should summerize all my efforts online and here I am. I can almost learn 
        anything, given I have the energy, time, and intertest. Here you will find some of my puslished work/efforts in this crazy software world of things.
        "
        />
      </Box>

      {/* body */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="10px"
        overflow={"scroll"}
      >
        {/* take 1 */}
        {/* <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
        > */}
        <Card sx={{ minWidth: 275, maxHeight: 200 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              INTRO
            </Typography>
            <Typography variant="h5" component="div">
              OK
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        {/* </Box> */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px", height: "100px" }}
          >
            stat box was
          </Typography>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px", height: "100px" }}
          >
            stat box was here
          </Typography>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px", height: "100px" }}
          >
            span 3
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
