import domain from '~/domain';
import {
  BackendHandler,
  BackendHandlerWithReqData,
} from '~/services/backend/types';
import { Order } from '../types';

const fetchOrdersHandler: BackendHandler<Order[]> = ({ backend }) =>
  backend.fetchOrders();

const deleteOrderHandler: BackendHandler<void> = ({ backend }) =>
  backend.deleteFirstOrder();

const createOrderHandler: BackendHandlerWithReqData<Order, Order> = ({
  backend,
  req,
}) => backend.createOrder(req);

const fetchOrdersFx = domain.core.createEffect({
  handler: fetchOrdersHandler,
});
 
const createOrderFx = domain.core.createEffect({
  handler: createOrderHandler,
});

const deleteOrderFx = domain.core.createEffect({
  handler: deleteOrderHandler,
});

export const ordersFx = {
  fetchOrdersFx,
  createOrderFx,
  deleteOrderFx,
};
