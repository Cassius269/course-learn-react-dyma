// Importer un module CSS
import styles from '../css/Footer.module.scss';

// Exporter le composant
export default function Footer(){
    // console.log(styles.test);
    return (
        <>
            <footer className= { styles.test}>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li> <a href="#">Linkedin</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </footer>
        </>
    )
}