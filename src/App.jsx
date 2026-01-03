import Article from './components/article';
import Footer from './components/Footer';
import Header from './components/Header';
import { Title } from './components/Title';

export default function App(){
    return (
        <>
            <Header />
            <main className='container'>
                <Title/>
                <section>
                    <h2 className='mt-5 mb-3'>Liste des articles</h2>
                    <div className='row d-flex justify-content-center gap-4 gap-md-4 gap-lg-5'>
                        <Article displayArticle={true} />  
                        <Article displayArticle={true} />  
                        <Article displayArticle={false}/>  
                        <Article displayArticle={true} />  
                        <Article displayArticle={true} />  
                        <Article displayArticle={true} />  
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}