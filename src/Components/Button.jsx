import {useState} from 'react'; // Importer le hook useState()


function Button({type, children}){
    const [count, setCount] = useState(0);
    const [isCountShown, setCountShown] = useState(true);

    const handleClickButtonSubmit = (e) => {
        console.log("bouton submit cliqué");
        setCount(count + 1); // incrémentation du compteur et mise à jour de la vue
        console.log(`Le compte de click (bouton submit) : ${count}`);
    };

    const handleClickCount = () => {
        setCountShown(!isCountShown);
    }

    return (
        <>
            <button onClick={handleClickButtonSubmit} type={type} className="btn btn-primary m-auto mt-5 col-11 col-md-6 col-lg-3">{children} {isCountShown && <i>{count}</i>}</button>
            <button onClick={handleClickCount} className="btn btn-success m-auto mt-5 col-11 col-md-6 col-lg-3">{isCountShown ? "Cacher le compteur" : "Montrer le compteur"}</button>
        </>
    )
}

export default Button;