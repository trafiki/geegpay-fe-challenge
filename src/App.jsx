import React from 'react';
import { Box, Text, Heading, Flex, Grid } from '@chakra-ui/react';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import TransactionCards from './components/main/TransactionCards';
import LastOrders from './components/main/LastOrders';
import SalesTrends from './components/main/SalesTrends';
import TopPlatform from './components/main/TopPlatform';

function App() {
  return (
    <Flex w="100vw">
      <Box>
        <Sidebar />
      </Box>

      <Box
        as="main"
        height="100vh"
        w="calc(100vw - 80px)"
        pos="absolute"
        right="0"
        overflow="hidden"
        bg="neutral.100"
      >
        <Header />
        <Box height="calc(100vh - 88px)" overflowX="hidden" p="20px">
          <Flex gap={5} direction={{ base: 'column', md: 'row' }}>
            <Box w={{ base: '100%', md: '60%' }}>
              <SalesTrends />
            </Box>

            <Box w={{ base: '100%', md: '60%' }}>
              <TransactionCards />
            </Box>
          </Flex>

          <Flex gap={5} mt={5} direction={{ base: 'column', md: 'row' }}>
            <Box w={{ base: '100%', md: '60%' }}>
              <LastOrders />
            </Box>

            <Box w={{ base: '100%', md: '40%' }}>
              <TopPlatform />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
