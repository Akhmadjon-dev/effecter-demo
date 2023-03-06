import { ulid } from 'ulid';

export function genId() {
  return ulid();
}

export function cloneAndAddId<T extends object>(
  o?: T | null,
): (T & { _id: string }) | null | undefined {
  return o ? { _id: genId(), ...o } : o;
}
