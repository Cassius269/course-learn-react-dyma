import '../assets/styles/layouts/Footer.module.scss';

export default function Article ({displayArticle})  {
console.log({displayArticle});

    return displayArticle ? (
            <article className='mt-4 card col-8 col-md-6 col-lg-3'>
                                <div className='card-body'>
                                    <h3 className='bg-primary py-3 text-white card-title'>Lorem ipsum dolor sit amet</h3>
                                    <p className='card-text text-body-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita iure recusandae deleniti ullam reiciendis, eaque totam eum itaque at temporibus quos libero quo, deserunt tempora. Natus libero iusto asperiores sunt.
                                    Tempore maiores repellendus illum ad. Voluptatem autem deserunt asperiores, hic et amet labore facilis totam quibusdam assumenda pariatur aliquam quo quos? Facilis deserunt tenetur eaque saepe nemo quos dolorem distinctio.
                                    Nobis beatae nostrum repellendus quos ratione. Tempore quam quo totam? Rem quo, cupiditate quisquam numquam voluptate exercitationem iure iste repellendus quaerat tempora maxime ipsa accusamus ad. Voluptatum rem similique suscipit
                                    .</p>
                                    <a href="#" title='lire l\article en entier'>
                                        <button type='button' className='btn btn-danger'>Continuer la lecture...</button>
                                    </a>
                                </div>
            </article>
            ) : (
                    <p>Aucun article</p>
                )  
            ;    
}

