import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  // Envuelvo al componente App en un contexto para compartirlo entre todos sus hijos
  // El value que ponga será lo que quiera compartir con el resto de componentes, pueden ser valores o incluso funciones
  <Provider>
    <App />
  </Provider>
);
