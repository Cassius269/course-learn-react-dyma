import { createRoot } from 'react-dom/client'
import  { Profile } from './Components/Profile';

// Récupération de l'élement racine
const root = createRoot(document.querySelector('#root'));

// Création de composant React
function SayHello(){
  return <h1>Hello world !!</h1>
}



root.render(<Profile name="John Dow" age={ 12 } isAdult={ true } />); // passer differents types dans les props