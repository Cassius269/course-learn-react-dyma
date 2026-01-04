import Article from "./article";
import articles from "../assets/data/articles"; // import des artcilezs


const Articles = () => {
     
    // Filtrer les articles publiés sous forme de tableau d'objets de type article
    const publishedArticles = articles.filter((a) => a.published == true); // return implicite
    // console.log(publishedArticles)

    return (
        <section>
            <h2 className='mt-5 mb-3'>Liste des articles</h2>
                <div className='row d-flex justify-content-center gap-4 gap-md-4 gap-lg-5'>
                    {publishedArticles.map( a =>( 
                        <Article 
                            key={a.id} 
                            title={a.title} 
                            content={a.content} 
                        />)
                    )}
                </div>
        </section>
    );
};


export default Articles;