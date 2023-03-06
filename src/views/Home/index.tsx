import { Box } from '@chakra-ui/react';
import React from 'react';
import { OrderList } from '~/features/order/components/OrderList';
import { Container } from '../Container';

const Home: React.FC = () => {
  return (
    <Container>
      <Box textAlign="center" px={4}>
        <Box overflow="auto" my={4}>
          <OrderList />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
