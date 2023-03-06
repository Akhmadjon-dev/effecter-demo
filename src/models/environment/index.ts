import { Domain } from 'effector';
import domain from '~/domain';
import { envEvents } from './events';
import { Env } from './types';

function init({ backendUrl, mode }: { backendUrl: string; mode: Env }) {
  if (mode !== 'production') {
    initDev();
  } else {
    initProd();
  }
  envEvents.backendTypeSelected('live');
  envEvents.backendUrlProvided(backendUrl);
  envEvents.initialized(mode);
}

function initDev() {
  attachLogger(domain.meta);
  attachLogger(domain.core);
  attachLogger(domain.service);
}

function attachLogger(aDomain: Domain, prefix?: string) {
  const domainShortName = [prefix, aDomain.shortName].filter(Boolean).join('.');
  const storeStyle = 'background-color: #3f3076';
  const eventStyle = 'background-color: #601f09';
  const effectStyle = 'background-color: #27524d';
  aDomain.onCreateEvent((event) =>
    event.watch((payload) =>
      console.log(
        `${domainShortName}!%c${event.shortName}`,
        eventStyle,
        payload,
      ),
    ),
  );
  aDomain.onCreateEffect((effect) => {
    effect.watch((payload) =>
      console.log(
        `${domainShortName}>%c${effect.shortName}`,
        effectStyle,
        payload,
      ),
    );
    effect.doneData.watch((payload) =>
      console.log(
        `${domainShortName}\u2705%c${effect.shortName}`,
        effectStyle,
        payload,
      ),
    );
    effect.failData.watch((payload) =>
      console.log(
        `${domainShortName}\u274c%c${effect.shortName}`,
        effectStyle,
        payload,
      ),
    );
  });
  aDomain.onCreateStore((store) => {
    const prefix = `${domainShortName}$%c${store.shortName}`;
    console.log(prefix, storeStyle, store.getState());
    store.updates.watch((state) => console.log(prefix, storeStyle, state));
  });
}

function initProd() {}

export const environment = {
  init,
};
