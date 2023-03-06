import domain from '~/domain';
import { Order } from '../types';

export const orderEvents = {
  orderCreationStarted: domain.core.createEvent(),
  orderCreationFailed: domain.core.createEvent<Error>(),
  firstOrderDeletionRequested: domain.core.createEvent(),
  newOrderSubmitted: domain.core.createEvent<Order>(),
  orderCreated: domain.core.createEvent<Order>(),
  orderDeleted: domain.core.createEvent(),

  ordersRequested: domain.core.createEvent(),
  ordersReceived: domain.core.createEvent<Order[]>(),
  ordersRequestFailed: domain.core.createEvent<Error>(),
  orderDeleteRequestFailed: domain.core.createEvent<Error>(),
};
