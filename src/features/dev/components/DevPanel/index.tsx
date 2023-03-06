import { button, Leva, useControls } from 'leva';
import { useDevPanel } from './hooks';

export const DevPanel: React.FC = () => {
  const { $, api } = useDevPanel();
  useControls({
    'Sample Order': button(api.onAddSampleOrder),
    'Delete first Order': button(api.onDeleteFirstOrder),
    'User name': '',
    'Phone': '',
    "Address": '',
  });
  return <Leva hidden={!$.isOpen} />;
};
