import '/src/css/article.scss';

export default function Article ()  {
    const color = "white";
    const textAlign = "center";
    const backgroundColor = "orange";
    const marginTop = "3rem"
    return (
            <>
                <article style= {{ marginTop }}>
                    <h2 style={{ color, textAlign, backgroundColor }}>Titre de l'article</h2>
                    <p>Contenu de l'article</p>
                </article>
            </>
    );
}

export const Title = () => {
    return <h1 className="title">Bienvenu Dans le blog</h1>
}