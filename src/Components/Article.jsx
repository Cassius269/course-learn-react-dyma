import '../assets/styles/layouts/Footer.module.scss';

export default function Article ({displayArticle})  {
    const articles = [
    { 
        id: 1,
        title: "Introduction à l'intelligence artificielle", 
        content: "Découverte des bases de l'intelligence artificielle et de ses applications.", 
        published: true
        },
    { 
        id: 2,
        title: "Les technologies essentielles du développement web", 
        content: "Les principaux outils pour créer des sites modernes et performants.",
        published: true
        },
    { 
        id: 3,
        title: "Bonnes pratiques de cybersécurité en entreprise", 
        content: "Les bonnes pratiques pour protéger ses données en ligne.",
        published: false
    }
    ];

    // Filtrer les articles publiés sous forme de tableau d'objets de type article
    const publishedArticles = articles.filter((a) => a.published == true);

    // console.log(publishedArticles)
    
    // Préparer les éléments visuel React en transformant chaque article pour intégrer les balises HTML à partir du JSX
    const listArticles = publishedArticles.map(a => {
        return ( 
            <article key={a.id} className='mt-4 card col-8 col-md-6 col-lg-3'>
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

    // console.log(listArticles)
    return  displayArticle && (listArticles) 
     ; 
}

