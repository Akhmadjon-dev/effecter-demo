import { combine, merge } from 'effector';
import domain from '~/domain';
import { backendServiceMock } from '~/services/backend/mock';
import { Backend } from '~/services/backend/types';
import { envEvents } from '../events';
import { Env } from '../types';

export const envStores = {
  backendType: domain.meta
    .createStore<'live' | 'mock'>('mock')
    .on(envEvents.backendTypeSelected, (_, payload) => payload),
  backendUrl: domain.meta
    .createStore<string>('')
    .on(envEvents.backendUrlProvided, (_, payload) => payload),
  backend: domain.service
    .createStore<Backend>(backendServiceMock)
    .on(envEvents.backendProvided, (_, payload) => payload),
  env: domain.meta
    .createStore<Env>('production')
    .on(envEvents.initialized, (_, payload) => payload),
};

// combine({
//   env: envStores.env,
//   backendType: envStores.backendType,
//   backendUrl: envStores.backendUrl,
// }).watch(
//   merge([envEvents.backendTypeSelected, envEvents.backendProvided]),
//   (store, eventPayload) =>
//     console.log('+++', 'backendUrl', store, eventPayload),
// );
