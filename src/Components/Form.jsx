import { useState } from "react";
import Button from "./Button"; // import du composant Button
import InputPlusLabel from "./InputPlusLabel";

export default function Form(){
    // La gestion d'état
     const [user, setUser] = useState({
        firstname:"", 
        age:null
        }
    );
    
    const [users, setUsers]= useState([]);

    // Les gestionnaires d'évenements de formulaire (submit, input, focus)
    const handleSubmit = (e) => {
        e.preventDefault(); // Désactiver le comportement par défaut de la soumission de formulaire (désactiver le rafraichissement de la page)
    
        console.log(user);
        // soumettre le formulaire
        const newUserList = [...users, {...user} ];

        console.log(newUserList)
        setUsers(newUserList);

        console.log("Formulaire envoyé");
    }

    const handleFocus = (e) => {
        console.log("Focus en cours sur l'input: ", e.target);
        console.log("Nom de la donnée: ", e.target.name);
    }

  const handleInput = (e) => {
    console.log("Tape:", e.target.value);

    // if(e.target.name ==="firstname"){
    // setUser({
    //     firstname: e.target.value,
    //     age: user.age
    // });
    // }else if(e.target.name ==="age"){
    //     setUser({
    //         firstname: user.firstname,
    //         age: e.target.value
    //     });
    // }
    let value = e.target.value;
    let name = e.target.name;
    // Convertir l'âge en nombre
    if(e.target.name === "age"){
        value*=1;
    }

    // Recupérer réactivement les données saisies
    setUser({
        ...user,
        [name] : value
    });
  };

  // Le markup du formulaire
    return (
        <>
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
        <section>
            <ul className="">
                {users.map(u => <li key={u.name}>{u.firstname}</li>)}
            </ul>
        </section>
        </>       
    )
}