import { Copyright } from "@mui/icons-material";
import { Box, Container, CssBaseline, Typography, createTheme } from "@mui/material";
import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";


interface FooterProps {
    
}
const defaultTheme = createTheme();
const Footer: FunctionComponent<FooterProps> = () => {
    return ( <div>
 <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              Footer
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>


    </div> );
}
 
export default Footer;