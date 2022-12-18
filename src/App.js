import { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme" //error can't find module??? 
import Home from "./scenes/home/Home"
import Topbar from "./components/Topbar";
import Credibility from "./scenes/credibility/Credibility";
import Team from "./scenes/team/Team";
import Socials from "./scenes/socials/Socials";
import About from "./scenes/about/About";
import { useLocation } from 'react-router-dom';
import AudioPLayer from "./components/AudioPlayer";
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import { setClientToken } from "./dt/remote/spotifyFetch";
import { loginEndpoint } from "./dt/remote/spotifyFetch";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '30vh',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        !!404!! You are not supposed to be lurking here...
      </Typography>
    </Box>
  );
}

const Login = () => {
  return (
    <Box display="flex" m={1} borderRadius={"20px"}>
      <div className="login-page" >
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="logo-spotify"
          className="logo"
        />
        <a href={loginEndpoint}>
          <div className="login-btn">LOG IN</div>
        </a>
      </div>
    </Box>
  );
}

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar dest={location.pathname} setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/credibility" element={<Credibility />} />
              <Route path="/team" element={<Team />} />
              <Route path="/socials" element={<Socials />} />
              <Route path="/about" element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>)
};

export default App;
