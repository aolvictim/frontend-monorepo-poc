import { createRoot } from 'react-dom/client';
import './style.css';
import typescriptLogo from '/typescript.svg';
import viteLogo from '/vite.svg';
import { Header, Counter } from '@repo/react-components';

const App = () => (
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo" />
    </a>
    <Header title="React Web App" />
    <div className="card">
      <Counter />
    </div>
  </div>
);

createRoot(document.getElementById('app')!).render(<App />);
