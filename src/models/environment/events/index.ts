import domain from '~/domain';
import { Backend } from '~/services/backend/types';
import { Env } from '../types';

export const envEvents = {
  initialized: domain.meta.createEvent<Env>(),
  backendUrlProvided: domain.meta.createEvent<string>(),
  backendTypeSelected: domain.meta.createEvent<'live' | 'mock'>(),
  backendProvided: domain.service.createEvent<Backend>(),
};
