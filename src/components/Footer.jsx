import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography variant="body2">
        © {new Date().getFullYear()} URL Shortener. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;