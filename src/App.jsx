import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MatrixTable from './components/MatrixTable';

function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [sumMatrix, setSumMatrix] = useState([]);
  const [productMatrix, setProductMatrix] = useState([]);
  const [resultMatrix, setResultMatrix] = useState([]);

  const generateMatrices = () => {
    if (rows <= 0 || cols <= 0) {
      window.alert('Please enter valid positive values for rows and columns.');
      return;
    }

    const sum = [];
    const product = [];

    for (let i = 0; i < rows; i++) {
      const sumRow = [];
      const prodRow = [];
      for (let j = 0; j < cols; j++) {
        sumRow.push(i + j);
        prodRow.push(i * j);
      }
      sum.push(sumRow);
      product.push(prodRow);
    }

    setSumMatrix(sum);
    setProductMatrix(product);
    setResultMatrix([]);
  };

  const addMatrices = () => {
    const result = sumMatrix.map((row, i) =>
      row.map((cell, j) => cell + productMatrix[i][j])
    );
    setResultMatrix(result);
  };

  return (
    <>
      <Navbar />
      <Container sx={{ py: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Stack direction="row" spacing={2}>
            <TextField
              type="number"
              value={rows}
              label="Rows"
              onChange={(e) => setRows(Number(e.target.value))}
              size="small"
            />
            <TextField
              type="number"
              value={cols}
              label="Columns"
              onChange={(e) => setCols(Number(e.target.value))}
              size="small"
            />
            <Button variant="contained" onClick={generateMatrices}>
              Generate
            </Button>
          </Stack>

          {sumMatrix.length > 0 && (
            <Box mt={4} display="flex" flexDirection="column" alignItems="center" gap={2}>
              <Box display="flex" alignItems="center" gap={2}>
                <MatrixTable
                  matrix={sumMatrix}
                  color="green"
                  label="cell = sum of index (i + j)"
                />
                <Typography fontSize={32} fontWeight="bold" color="text.secondary">
                  +
                </Typography>
                <MatrixTable
                  matrix={productMatrix}
                  color="red"
                  label="cell = multiplication of index (i × j)"
                />
              </Box>

              <Button variant="outlined" color="secondary" onClick={addMatrices}>
                Add Matrix
              </Button>
            </Box>
          )}

          {resultMatrix.length > 0 && (
            <Box mt={4}>
              <MatrixTable
                matrix={resultMatrix}
                color="orange"
                label="After adding"
              />
            </Box>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
