import { Box, Link, Typography } from '@mui/material';

function Copyright(props) {
  return (
    <Box color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Typography variant="body2" color="text.secondary">
        Developed at GoIT by{' '}
        <Link
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AndreeaSichitiu"
        >
          Sichitiu Andreea
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

export const Footer = () => {
  return (
    <Box component="footer">
      <Box
        sx={{
          // marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'transparent',
          marginTop: '100px',
        }}
      >
        <Copyright sx={{ my: 1.5 }} />
      </Box>
    </Box>
  );
};
