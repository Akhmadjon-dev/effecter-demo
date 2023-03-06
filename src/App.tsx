import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
