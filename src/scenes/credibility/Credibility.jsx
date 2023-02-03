import { Typography, Box, IconButton, useTheme } from "@mui/material";
import { useContext, React } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  AvatarGroup,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Add from "../../components/sidebar/Add";
import Form from "../../components/Form";
import GitHubCards from "./GitHubCards";
import { Grid, Link } from "@mui/material";
import MuiTypography from "@mui/material/Typography";
import { Card, CardContent, CardHeader} from '@mui/material';

const Credibility = ({
  title = "You are credibility",
  subtitle = "show the stuff you've done",
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Card
        sx={{
          width: "100%",
          border: "1px solid",
          borderColor: theme.palette.primary.light,
          ":hover": {
            boxShadow: "0 2px 14px 0 rgb(32 40 45 / 8%)",
          },
        }}
      >
        {/* card header and action */}
          <CardHeader
            sx={{ p: 2.5 }}
            title={<Typography variant="h4">{"hello"}</Typography>}
            
          />

        {/* content & header divider */}
        <Divider
          sx={{
            opacity: 1,
            borderColor: theme.palette.primary.light,
          }}
        />
        {/* card content */}
        <CardContent
          sx={{ p: 2.5}}
        >
          {"hello"}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Credibility;
