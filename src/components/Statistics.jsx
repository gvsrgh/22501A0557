import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  table: {
    minWidth: 650,
  },
}));
const Statistics = () => {
  const classes = useStyles();
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    // Fetch statistics from the backend API
    const fetchStatistics = async () => {
      try {
        const response = await fetch('/api/statistics'); // Adjust the endpoint as needed
        const data = await response.json();
        setStatistics(data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <Box className={classes.container}>
      <Typography variant="h4" gutterBottom>
        URL Shortener Statistics
      </Typography>
      <TableContainer>
        <Table className={classes.table} aria-label="statistics table">
          <TableHead>
            <TableRow>
              <TableCell>Shortened URL</TableCell>
              <TableCell>Creation Date</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Click Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statistics.map((stat) => (
              <TableRow key={stat.shortenedUrl}>
                <TableCell>{stat.shortenedUrl}</TableCell>
                <TableCell>{new Date(stat.creationDate).toLocaleString()}</TableCell>
                <TableCell>{new Date(stat.expiryDate).toLocaleString()}</TableCell>
                <TableCell>{stat.clickCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default Statistics;