import { envFlows } from './environment';
import { orderFlows } from './order';

export const flows = {
  init() {
    envFlows.init();
    orderFlows.init();
  },
};
