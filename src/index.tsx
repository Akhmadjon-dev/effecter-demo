import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { environment } from '~/models/environment';
import { flows } from '~/flows';
import { Env } from './models/environment/types';

const backendUrl = (import.meta.env.VITE_BACKEND_URL as string) || '/api';
const mode = import.meta.env.MODE as Env;

flows.init();
environment.init({ backendUrl, mode });

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
);
