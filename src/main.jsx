import { createRoot } from 'react-dom/client'

// Récupération de l'élement racine
const root = createRoot(document.querySelector('#root'));

// Création d'éléments React
const image = <img src="https://images.pexels.com/photos/31086170/pexels-photo-31086170.jpeg" alt="" width={200} />;

const component = () => {
  return <h1 className='title'>Hello world !!</h1>;
}


root.render(image);