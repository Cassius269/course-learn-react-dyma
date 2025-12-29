import { createRoot } from 'react-dom/client'
import Article from './components/article';


// Récupération de l'élement racine
const root = createRoot(document.querySelector('#root'));



root.render(
    <Article/>
); 