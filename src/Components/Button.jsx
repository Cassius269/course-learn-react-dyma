import {useState} from 'react'; // Importer le hook useState()


function Button({type, children}){
    const [count, setCount] = useState(0);

    const handleOnclick = (e) => {
        console.log("bouton submit cliqué");
        setCount(count + 1); // incrémentation du compteur et mise à jour de la vue
        console.log(`Le compte de click (bouton submit) : ${count}`);
    };

    console.log(`Nouvelle valeur du compteur: ${count}`)
    return <button onClick={handleOnclick} type={type} className="btn btn-primary m-auto mt-5 col-11 col-md-6 col-lg-3">{children} <i>{count}</i></button>
}

export default Button;