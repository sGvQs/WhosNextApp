import ReactDOM from 'react-dom/client';
import { App } from './pages/app';
import { StoreStateProvider } from './context/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreStateProvider>
    <App />
  </StoreStateProvider>
);
