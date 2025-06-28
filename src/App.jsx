import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Statistics from './components/Statistics.jsx'
import UrlShortener from './components/UrlShortner.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
}))
const App = () => {
  const classes = useStyles()

  return (
    <Router>
      <Header />
      <Container className={classes.container}>
        <Routes>
          <Route path="/" element={<UrlShortener />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}


export default App
