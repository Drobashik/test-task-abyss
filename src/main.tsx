import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './scss/index.scss';
import { ScaleProvider } from './context/scaleContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ScaleProvider>
    <App />
  </ScaleProvider>
)
