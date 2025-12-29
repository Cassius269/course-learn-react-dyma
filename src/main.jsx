import { createRoot } from 'react-dom/client'
import Article, { Title } from './components/article';
import Footer from './components/Footer';
import './css/index.scss'; // Importer la stylisation de base de toute l'application

// Récupération de l'élement racine
const root = createRoot(document.querySelector('#root'));

root.render(
    <>
        <main>
            <Title/>
            <Article/>  
        </main>
        <Footer/>
    </>
); 