import { useState } from "react";
import Button from "./Button"; // import du composant Button
import InputPlusLabel from "./InputPlusLabel";

export default function Form(){
     const [user, setUser] = useState({
        firstname:"", 
        age:null
        }
    );
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Désactiver le comportement par défaut de la soumission de formulaire (désactiver le rafraichissement de la page)
    
        console.log(user);
        // soumettre le formulaire
        console.log("Formulaire envoyé");
    }

    const handleFocus = (e) => {
        console.log("Focus en cours sur l'input: ", e.target);
    }

  const handleInput = (e) => {
    console.log("Tape:", e.target.value);

    if(e.target.name ==="firstname"){
    setUser({
        firstname: e.target.value,
        age: user.age
    });
    }else if(e.target.name ==="age"){
        setUser({
            firstname: user.firstname,
            age: e.target.value
        });
    }

  };

    return (
        <section className="container mt-5">
            <h3 className="fs-2 mb-5">Formulaire d'inscription <i className="">info</i></h3>
            <form onSubmit={handleSubmit} action="" method="GET" className="row bg-primary-subtle p-5 rounded-2">
                <InputPlusLabel 
                    onFocus={handleFocus} 
                    onInput={handleInput} 
                    type="text" name="firstname" 
                    placeholder="Veuillez entrer votre prénom" 
                />
                <InputPlusLabel 
                    onInput={handleInput} 
                    onFocus={handleFocus} 
                    type="number" 
                    name="age" 
                    placeholder="Veuillez entrer votre âge" 
                />
                <Button type="submit">Envoyer</Button>
            </form>
        </section>
        
    )
}