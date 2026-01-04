import Article from "./article";

const Articles = () => {
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
    const publishedArticles = articles.filter((a) => a.published == true); // return implicite
    

    // console.log(publishedArticles)
                <section>
                    <h2 className='mt-5 mb-3'>Liste des articles</h2>
                    <div className='row d-flex justify-content-center gap-4 gap-md-4 gap-lg-5'>
                        <Article key = {article.id} title= {article.id} content={article.content} />
                    </div>
                </section>
};


export default Articles;