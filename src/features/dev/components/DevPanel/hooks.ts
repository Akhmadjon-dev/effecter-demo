import { useStore } from 'effector-react';
import { devPanel } from './state';

export function useDevPanel() {
  const { $, api } = devPanel;
  const isOpen = useStore($.isOpen);

  return {
    $: {
      isOpen,
    },
    api,
  };
}
