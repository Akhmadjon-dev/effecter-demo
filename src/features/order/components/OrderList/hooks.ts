import { useStore } from 'effector-react';
import { orderList } from './state';

export const useOrderList = () => {
  const { $ } = orderList;
  const orders = useStore($.orders);
  return {
    $: {
      orders,
    },
  };
};
