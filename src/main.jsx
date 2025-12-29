import { createRoot } from 'react-dom/client'
import  { Profile, Image } from './Components/Profile';

// Récupération de l'élement racine
const root = createRoot(document.querySelector('#root'));

// Création de composant React
function SayHello(){
  return <h1>Hello world !!</h1>
}



root.render(
    <Profile source ="https://images.pexels.com/photos/28271725/pexels-photo-28271725.jpeg" />  
); 