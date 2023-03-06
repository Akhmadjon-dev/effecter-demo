import { orderStores } from '~/models/order/stores';

export const orderList = {
  $: {
    orders: orderStores.allOrders,
  },
};
