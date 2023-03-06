import { combine } from 'effector';
import { envEvents } from '~/models/environment/events';
import { envStores } from '~/models/environment/stores';
import { backendServiceLive } from '~/services/backend/live';
import { backendServiceMock } from '~/services/backend/mock';

export const envFlows = {
  init() {
    combine({
      backendType: envStores.backendType,
      backendUrl: envStores.backendUrl,
    }).watch(envEvents.initialized, ({ backendUrl, backendType }, _) => {
      envEvents.backendProvided(
        backendType === 'live'
          ? backendServiceLive(backendUrl)
          : backendServiceMock,
      );
    });
  },
};
