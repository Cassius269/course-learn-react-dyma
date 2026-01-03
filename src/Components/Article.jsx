import '../assets/styles/layouts/Footer.module.scss';

export default function Article ({displayArticle})  {
// console.log({displayArticle});

const articles = [
  { 
    title: "Introduction à l'intelligence artificielle", 
    content: "Découverte des bases de l'intelligence artificielle et de ses applications." 
    },
  { 
    title: "Les technologies essentielles du développement web", 
    content: "Les principaux outils pour créer des sites modernes et performants." 
    },
  { 
    title: "Bonnes pratiques de cybersécurité en entreprise", 
    content: "Les bonnes pratiques pour protéger ses données en ligne." 
}
];


const listArticles = articles.map(a => {
  return ( 
    <article className='mt-4 card col-8 col-md-6 col-lg-3'>
        <div className='card-body'>
            <h3 className='bg-primary p-3 text-white card-title'>{a.title}</h3>
            <p className='card-text text-body-secondary'>{a.content}</p>
            <a href="#" title='lire l\article en entier'>
            <button type='button' className='btn btn-danger'>Continuer la lecture...</button>
            </a>
        </div>
    </article>
  );
})

    return  displayArticle && (listArticles) 
     ; 
}

