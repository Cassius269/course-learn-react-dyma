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
    
    const [userList, setUserList]= useState([]);

    // Les gestionnaires d'évenements de formulaire (submit, input, focus)
    const handleSubmit = (e) => {
        e.preventDefault(); // Désactiver le comportement par défaut de la soumission de formulaire (désactiver le rafraichissement de la page)
    
        console.log(user);
        // soumettre le formulaire
        const newUserList = [...userList, {...user} ]; 
        console.log(newUserList)
        setUserList(newUserList);

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

  const handlerClickDelete = (index) => {
    // const id = e.target.value;
    console.log(index);

    const newUserList = userList.filter((u,i) => i !==index); // faire une copie de la liste
    console.log(newUserList);
    setUserList(newUserList); // modifier l'état de la liste des utilisateurs
  };


  const handleClickSort = () => {
        const newUserList = [...userList];
        
        newUserList.sort((a,b) => a.firstname.localeCompare(b.firstname)); //
        console.log(newUserList);
        setUserList(newUserList); // modifier l'état de la liste des utilisateurs

  }

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
        <section className="mt-5">
            <div className="mb-2">
                <button onClick={handleClickSort} className="btn btn-success">Trier la liste</button>
            </div>
            <ul className="">
                {userList.map((u, index) => <li key={u.id || index}>{u.firstname} <i onClick={() => handlerClickDelete(index)} role="button" className="bi bi-trash3 cursor-pointer"></i></li>)}
            </ul>
        </section>
        </>       
    )
}