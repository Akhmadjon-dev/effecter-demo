import { genId } from '~/libs/impure/idgen';
import { orderEvents } from '~/models/order/events';
import { Order } from '~/models/order/types';
import { devStores } from '~/models/dev/stores';

export const devPanel = {
  $: {
    isOpen: devStores.isPanelOpen,
  },
  api: {
    onAddSampleOrder: () => {
      const order: Order = {
        _id: genId(),
        orderSpecifics: {
          __kind: 'acceptance',
          releaseDate: new Date(),
        },
        orderNumber: 'G-21007-II',
      };
      orderEvents.newOrderSubmitted(order);
    },
    onDeleteFirstOrder: () => {
      orderEvents.firstOrderDeletionRequested();
    },
  },
};
