import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UrlShortener from './components/UrlShortener';
import Statistics from './components/Statistics';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Container maxWidth="md">
          <Switch>
            <Route path="/" exact component={UrlShortener} />
            <Route path="/statistics" component={Statistics} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;