import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={2} overflow={"auto"}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
            sollicitudin tempor id eu nisl. Lacus laoreet non curabitur gravida
            arcu ac tortor dignissim convallis. Justo eget magna fermentum
            iaculis. Aliquet porttitor lacus luctus accumsan tortor posuere ac
            ut consequat. Sit amet consectetur adipiscing elit duis tristique
            sollicitudin nibh. Massa enim nec dui nunc mattis enim ut tellus
            elementum. Pellentesque habitant morbi tristique senectus et netus
            et malesuada. Etiam non quam lacus suspendisse faucibus interdum.
            Bibendum arcu vitae elementum curabitur vitae nunc sed. Diam vel
            quam elementum pulvinar etiam non quam lacus suspendisse. Tortor
            vitae purus faucibus ornare suspendisse sed nisi lacus. Sit amet
            nisl suscipit adipiscing bibendum est ultricies integer quis.
            Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default About;
