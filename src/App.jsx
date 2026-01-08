import Article from './components/article';
import Footer from './components/Footer';
import Header from './components/Header';
import { Title } from './components/Title';
import Articles from './components/Articles';
import Form from './components/Form';

export default function App(){
    return (
        <>
            <Header />
            <main className='container'>
                <Title/>
                <Articles />
                <Form />
            </main>
            <Footer/>
        </>
    )
}