import { ThemeProvider } from '@mui/system';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './component/appbar';
import Banner from './component/banner';
import Promotions from './component/promotions';
import Products from './component/products';

function App() {
  useEffect(() => {
    document.title = 'Responsive';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth='xl'
        sx={{
          background: '#fff',
        }}
      >
        <Appbar />
        <Banner />
        <Promotions />
        <Products />
        {/*
    
        title
        Products
        footer
        searchbox
        AppDrawer
        */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
