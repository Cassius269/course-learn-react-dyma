import '../assets/styles/layouts/Article.module.scss';

export default function Article ({id, title, content})  {

        return ( 
            <article key={id} className='mt-4 card col-8 col-md-6 col-lg-3'>
                <div className='card-body'>
                    <h3 className='bg-primary p-3 text-white card-title'>{title}</h3>
                    <p className='card-text text-body-secondary'>{content}</p>
                    <a href="#" title='lire l\article en entier'>
                    <button type='button' className='btn btn-danger'>Continuer la lecture...</button>
                    </a>
                </div>
            </article>
        );
}

