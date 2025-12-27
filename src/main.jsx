import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React, { StrictMode } from 'react';

// Création d'éléments React
const root = createRoot(document.getElementById('root'));

const title = React.createElement(
  'h1',
  { className: 'myClass'},
  'Hello world'
);



const section = React.createElement(
  'section', 
  {className: 'sectionPresentation'},
  title // injecter l'élement React de titre dans la section
);

root.render(section);  // injecter l'élement React de section dans l'élement racine
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/