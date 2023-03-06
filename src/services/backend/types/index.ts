import { Order } from '~/models/order/types';

export interface Backend {
  fetchOrders(): Promise<Order[]>;
  deleteFirstOrder(): Promise<void>;
  createOrder(order: Order): Promise<Order>;
}

export type BackendHandler<RES> = (param: { backend: Backend }) => Promise<RES>;

export type BackendHandlerWithReqData<REQ, RES> = (param: {
  backend: Backend;
  req: REQ;
}) => Promise<RES>;
 