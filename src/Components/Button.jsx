import {useState} from 'react'; // Importer le hook useState()
import Counter from './Counter';


function Button({type, children}){
    console.log("render button");

    const [count, setCount] = useState(0); // compteur avec état initial à 0

    const handleClick = () => {
        console.log("bouton submit cliqué");
        setCount(count + 1); // incrémentation du compteur et re-rendering du composant
        console.log(`Ancienne valeur de count au  click (bouton submit) : ${count}`);
    };


    return (
        <>
            <button onClick={handleClick} type={type} className="btn btn-primary m-auto mt-5 col-11 col-md-6 col-lg-3">{children} <Counter count={count}/></button>
        </>
    )
}

export default Button;