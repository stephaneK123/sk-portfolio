import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from './Header';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  topic: "",
  note: "",
  address2: "",
};

export default function TableList() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'Highlight', textAlign: "center" }}
      >
        <Tab label="" {...a11yProps(-1)} />
        <Tab label="" {...a11yProps(-1)} />
        <Tab label="About Me" {...a11yProps(0)} />
        <Tab label="Contact Me" {...a11yProps(1)} />
        <Tab label="Leave a review" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>

      </TabPanel>
      <TabPanel value={value} index={1}>

      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box m="1px">
          <Typography variant="h6" gutterBottom>
            Where it all started..
          </Typography>

          <Box component="div" whiteSpace="normal">
            <Typography variant="h5" gutterBottom flexWrap={"true"} paragraph width={"300px"} >
              It's early 2019, I am a junior in highschool, and getting bored of it.
              My teacher noticed my interest in computers and  introduced me to early college.
              I went to an Android summer camp and a dream was born.
              I am a semester shy of getting my bachalors in Software Engineering.
              I have learned a lot along the way and done a fair amount to find my interests and goals in the field.
              I honestly still get lost myself, and here is an attempt to centrilize all my efforts. </Typography>
          </Box>

          <Typography variant="button" display="block" >
            See some of my work
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box m="1px">
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="8px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2" }}
                    inputProps={{ maxLength: 12 }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: "span 2" }}
                    inputProps={{ maxLength: 12 }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Your Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 2" }}
                    inputProps={{ maxLength: 25 }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Topic"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.topic}
                    name="topic"
                    error={!!touched.topic && !!errors.topic}
                    helperText={touched.topic && errors.topic}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Note"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.note}
                    name="note"
                    error={!!touched.note && !!errors.note}
                    helperText={touched.note && errors.note}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <Button style={{ fontSize: '9px' }} type="button" color="secondary" variant="outlined">
                    Send it my way!
                  </Button>
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">

                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        nothing interesting here
      </TabPanel>
      <TabPanel value={value} index={5}>
        nothing intersting here 
      </TabPanel>
    </Box>
  );
}
