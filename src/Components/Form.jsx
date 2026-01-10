import Button from "./Button"; // import du composant Button
import InputPlusLabel from "./InputPlusLabel";

export default function Form(){
    const handleSubmit = (e) => {
        e.preventDefault(); // Désactiver le comportement par défaut de la soumission de formulaire (désactiver le rafraichissement de la page)
       
        // soumettre le formulaire
        console.log("Formulaire envoyé");
    }

    const handleFocus = (e) => {
        console.log("Focus en cours sur l'input: ", e.target);

    }

    return (
        <section className="container mt-5">
            <h3 className="fs-2 mb-5">Formulaire d'inscription <i className="">info</i></h3>
            <form onSubmit={handleSubmit} action="" method="GET" className="row bg-primary-subtle p-5 rounded-2">
                <InputPlusLabel onFocus={handleFocus} type="text" name="lastname" placeholder="Nom de Famille" />
                <InputPlusLabel onFocus={handleFocus} type="text" name="firstname" placeholder="Prénom" />
                <InputPlusLabel onFocus={handleFocus} type="email" name="email"  placeholder="email" />
                <Button type="submit">Submit</Button>
                {/* <button type="submit" className="btn btn-primary m-auto mt-5 col-11 col-md-6 col-lg-3">Soumettre</button>      */}
            </form>
        </section>
        
    )
}