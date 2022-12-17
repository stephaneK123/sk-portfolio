import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
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

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>)
};

export default App;
