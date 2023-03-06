import domain from '~/domain';
import { envEvents } from '~/models/environment/events';

export const devStores = {
  isPanelOpen: domain.dev.createStore<boolean>(false).on(
    envEvents.initialized.map((env) => env === 'development'),
    (_, payload) => payload,
  ),
};
