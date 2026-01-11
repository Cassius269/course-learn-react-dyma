import {useState} from 'react'; // Importer le hook useState()
import Counter from './Counter';


function Button({type, children}){
    console.log("render button");

    const [count, setCount] = useState(0); // compteur avec état initial à 0
    const [isCountShown, setCountShown] = useState(true); // compteur avec état initial à true

    const handleClickButtonSubmit = () => {
        console.log("bouton submit cliqué");
        setCount(c => c + 1); // incrémentation du compteur et re-rendering du composant
        setCount(c => c + 1); // incrémentation du compteur et re-rendering du composant
        console.log(`Ancienne valeur de count au  click (bouton submit) : ${count}`);
    };

    const handleClickCount = () => {
        setCountShown(!isCountShown);
    }

    return (
        <>
            <button onClick={handleClickButtonSubmit} type={type} className="btn btn-primary m-auto mt-5 col-11 col-md-6 col-lg-3">{children} {isCountShown && <Counter count={count}/>}</button>
            <button type='button' onClick={handleClickCount} className="btn btn-success m-auto mt-5 col-11 col-md-6 col-lg-3">{isCountShown ? "Cacher le compteur" : "Montrer le compteur"}</button>
        </>
    )
}

export default Button;