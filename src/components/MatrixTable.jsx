import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';

const MatrixTable = ({ matrix, color, label }) => {
  return (
    <Box className="matrix-table" sx={{ my: 2 }}>
      {label && (
        <Typography
          variant="subtitle1"
          className={`matrix-label ${color}`}
          sx={{ textAlign: 'center', mb: 1 }}
        >
          {label}
        </Typography>
      )}

      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            {matrix.map((row, i) => (
              <TableRow key={i}>
                {row.map((cell, j) => (
                  <TableCell key={j} align="center">
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MatrixTable;

