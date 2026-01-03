import { createRoot } from 'react-dom/client'
import App from './App';
import './assets/styles/App.scss'; // Importer la stylisation de base de toute l'application

// Récupération de l'élement racine
const root = createRoot(document.querySelector('#root'));

root.render(
   <App />
); 