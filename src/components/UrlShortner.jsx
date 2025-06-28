import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Looger from '../../Logger';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  result: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
}));

const UrlShortener = () => {
  const classes = useStyles();
  const [longUrl, setLongUrl] = useState('');
  const [validity, setValidity] = useState(60);
  const [shortCode, setShortCode] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Simulate API call to shorten URL
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const generatedShortCode = shortCode || Math.random().toString(36).substring(2, 8);
          const expiry = new Date(Date.now() + validity * 60000);
          resolve({
            shortUrl: `http://short.url/${generatedShortCode}`,
            expiryDate: expiry.toLocaleString(),
          });
        }, 1000);
      });

      setShortenedUrl(response.shortUrl);
      setExpiryDate(response.expiryDate);
      Looger('UrlShortener', 'info', 'UrlShortener', `Shortened URL created: ${response.shortUrl}`);
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
      Looger('UrlShortener', 'error', 'UrlShortener', err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <Container className={classes.root}>
      <Paper elevation={3} className={classes.form}>
        <Typography variant="h4" gutterBottom>
          URL Shortener
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Long URL"
            variant="outlined"
            fullWidth
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required
          />
          <TextField
            label="Validity (minutes)"
            variant="outlined"
            type="number"
            fullWidth
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
            required
          />
          <TextField
            label="Custom Short Code (optional)"
            variant="outlined"
            fullWidth
            value={shortCode}
            onChange={(e) => setShortCode(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={loading}
          >
            {loading ? 'Shortening...' : 'Shorten URL'}
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}
      </Paper>
      {shortenedUrl && (
        <Paper elevation={3} className={classes.result}>
          <Typography variant="h6">Shortened URL:</Typography>
          <Typography variant="body1">{shortenedUrl}</Typography>
          <Typography variant="body2">Expiry Date: {expiryDate}</Typography>
        </Paper>
      )}
    </Container>
  );
}

export default UrlShortener;
/*******
 * This code defines a simple URL Shortener component using React and Material-UI.
 * It includes a form for users to input a long URL, specify validity in minutes, and optionally provide a custom shortcode.
 * Upon submission, it simulates an API call to generate a shortened URL and displays the result along with the expiry date.
 */