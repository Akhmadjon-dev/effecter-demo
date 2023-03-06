import { backendServiceMock } from '../mock';
import { Backend } from '../types';

export function backendServiceLive(url: string): Backend {
  return {
    ...backendServiceMock,
  };
}
