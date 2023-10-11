import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';

const MainBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#d9d9dc',
    },
  },
  typography: {
    button: {
      fontFamily: 'Ubuntu',
    },
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleStart = () => {
    isLoggedIn ? navigate('/contacts') : navigate('/login');
  };
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MainBox component="main">
        <Typography
          sx={{
            mb: 1,
            fontSize: {
              xs: '30px',
              sm: '40px',
              md: '52px',
            },
          }}
          variant="h2"
          fontWeight="500"
          fontFamily="Ubuntu"
          color="#1976d2"
          maxWidth="480px"
          marginLeft="auto"
          marginRight="auto"
          marginTop="40px"
        >
          All your <br />
          phonebook <br /> contacts in
        </Typography>
        <Typography
          sx={{
            mb: {
              xs: 2.5,
              sm: 3,
              md: 6,
            },
            fontSize: {
              xs: '34px',
              sm: '44px',
              md: '56px',
            },
          }}
          variant="h1"
          fontWeight="700"
          fontFamily="Ubuntu"
          color="#ffffff"
          maxWidth="480px"
          marginLeft="auto"
          marginRight="auto"
        >
          PhoneApp
        </Typography>
        <Button
          type="button"
          variant="contained"
          aria-label="Start"
          size="large"
          color="primary"
          marginLeft="24px"
          endIcon={<KeyboardArrowRightIcon />}
          onClick={handleStart}
        >
          Get started
        </Button>
      </MainBox>
    </ThemeProvider>
  );
};

export default Home;
