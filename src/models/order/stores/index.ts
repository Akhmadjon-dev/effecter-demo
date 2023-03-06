import domain from '~/domain';
import { orderEvents } from '../events';
import { Order } from '../types';

const allOrders = domain.core
  .createStore<Order[]>([])
  .on(orderEvents.ordersReceived, (_, payload) => payload)
  .on(orderEvents.orderCreated, (orders, payload) => [payload, ...orders])
  .on(orderEvents.orderDeleted, (orders) => orders.slice(1));

export const orderStores = {
  allOrders,
};
