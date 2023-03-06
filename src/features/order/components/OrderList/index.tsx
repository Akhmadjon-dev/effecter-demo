import * as React from 'react';
import { OrderRow } from '../../widgets/OrderRow';
import { useOrderList } from './hooks';

export const OrderList: React.FC = () => {
  const { $ } = useOrderList();
  return (
    <>
      {$.orders.map((order) => (
        <OrderRow order={order} key={order._id} />
      ))}
    </>
  );
};
