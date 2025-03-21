import { Container, Box, useMediaQuery,} from '@mui/material';
import backgroundImage from '../../resources/images/Logo1x1.jpg';
import Login from '../../auth/Login';
import React from 'react';


const LoginScreen = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));


  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
         {!isSmallScreen && ( 
          <Box
            sx={{
              width: "50%",
              height: "100vh",
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
        <Login></Login>
      </Box>
    </Container>
  );
};

export default LoginScreen;
