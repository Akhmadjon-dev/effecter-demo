import { string } from 'fp-ts';

function isEmpty(array?: any[]): boolean {
  return !array || array.length === 0;
}

export default {
  isEmpty,
  isNotEmpty(array?: any[]): boolean {
    return !isEmpty(array);
  },
  last<T>(array: T[]): T | undefined {
    return array[array.length - 1];
  },
};
