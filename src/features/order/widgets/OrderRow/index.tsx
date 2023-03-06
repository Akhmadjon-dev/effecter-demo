import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { Order } from '~/models/order/types';

interface Props {
  order: Order;
}

export const OrderRow: React.FC<Props> = ({ order }) => {
  const { _id, orderSpecifics, orderNumber } = order;
  return (
    <Box>
      {_id} {orderSpecifics.__kind} {orderNumber}
    </Box>
  );
};
