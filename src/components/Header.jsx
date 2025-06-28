// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// } make it this simple, the componants are Header, Footer, Statistics, and UrlShortener
// header.jsx simple navigation at middle

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    margin: theme.spacing(1),
    },
}));
const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          URL Shortener
        </Typography>
        <Button color="inherit" component={Link} to="/" className={classes.link}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/statistics" className={classes.link}>
          Statistics
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Header;