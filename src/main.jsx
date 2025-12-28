import { createRoot } from 'react-dom/client'

// Récupération de l'élement racine
const root = createRoot(document.querySelector('#root'));

// Création d'éléments React
const image = <img src="https://images.pexels.com/photos/31086170/pexels-photo-31086170.jpeg" alt="" width={200} />;

const number = 4;

function add(a,b){
  return a+b;
};

const myclass = 'title';
const component = () => {
  return <h1 className={myclass}>Hello world !! * {add(1,2)}</h1>;
}

const Content = (
  <>
    <section>
      <h1>Le gros titre</h1>
      <p>Premier paragraphe</p>
    </section>
    <p>Hello world</p>
  </>
);

// Convertir du HTML en JSX
const ComponentB = () => {
  return <section>
          <h1>La todolist de Hedi</h1>
          <ul>
            <li>Aller au cinéma</li>
            <li>Faire du sport</li>
            <li>Aller au restaurant</li>
          </ul>
        </section>
}      ;

root.render(ComponentB());