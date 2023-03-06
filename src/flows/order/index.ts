import { orderEvents as e } from '~/models/order/events';
import { ordersFx as fx } from '~/models/order/fx';
import { envStores as e$ } from '~/models/environment/stores';

export const orderFlows = {
  init() {
    fetchOrders();
    createOrder();
    deleteOrder();
  },
};

function fetchOrders() {
  e$.backend.watch(e.ordersRequested, (backend) =>
    fx.fetchOrdersFx({ backend }),
  );
  // forward({ from: e.ordersRequested, to: fx.fetchOrdersFx }); same as above, but forwards are processed before store updates and watchers
  fx.fetchOrdersFx.doneData.watch(e.ordersReceived);
  fx.fetchOrdersFx.failData.watch(e.ordersRequestFailed);
}

function createOrder() {
  e$.backend.watch(e.newOrderSubmitted, (backend, req) =>
    fx.createOrderFx({ backend, req }),
  );
  fx.createOrderFx.doneData.watch(e.orderCreated);
  fx.createOrderFx.failData.watch(e.orderCreationFailed);
}

function deleteOrder() {
  e$.backend.watch(e.firstOrderDeletionRequested, (backend) =>
    fx.deleteOrderFx({ backend }),
  );
  fx.deleteOrderFx.doneData.watch(e.orderDeleted);
  fx.deleteOrderFx.failData.watch(e.orderDeleteRequestFailed);
}
 