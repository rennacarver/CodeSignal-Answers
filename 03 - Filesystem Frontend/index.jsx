import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error("Root element 'app' not found.");
const root = createRoot(rootElement);
root.render(<App />);
