import { Backend } from '../types';

export const backendServiceMock: Backend = {
  async fetchOrders() {
    return [];
  },
  async createOrder(order) {
    return order;
  },
  async deleteFirstOrder() {},
};
