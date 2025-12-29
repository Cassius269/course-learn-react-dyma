import { createRoot } from 'react-dom/client'
import { Profile,  Image } from './Components/Profile';

// Récupération de l'élement racine
const root = createRoot(document.querySelector('#root'));

// Création de composant React
function SayHello(){
  return <h1>Hello world !!</h1>
}



root.render(
  <>
    <Profile name="Jean" age={12} />  
    <Image/>
    <Image/>
    <Profile name="Pierre" age={10}>
      <button>Cliquer</button>
    </Profile>
  </>
); 