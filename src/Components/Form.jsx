export default function Form(){
    const handleInput = (e) => {
        console.log(e)
        console.log(e.target.value)
    }

    const handleFocus= (e) => {
        console.log("objet event", e);
        console.log("input cliqué", e.target);
        e.target.a
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Désactiver le comportement par défaut de la soumission de formulaire (désactiver le rafraichissement de la page)

        console.log("Formulaire mis en attente");
        // soumettre le formulaire
    }

    return (
        <section className="container mt-5">
            <h3 className="fs-2 mb-5">Formulaire d'inscription</h3>
            <form onSubmit={handleSubmit} action="" method="GET" className="row bg-primary-subtle p-5 rounded-2">
                <div className="mb-2 col-12 col-md-6">
                    <label htmlFor="lastname" className="form-label">Nom de famille</label>
                    <input onFocus={handleFocus} onInput={handleInput} type="text" id="lastname" name="lastname" placeholder="Nom" className="form-control"/>
                </div> 
                
                <div className="mb-2 col-12 col-md-6">
                    <label htmlFor="firstname" className="form-label">Prénom</label>
                    <input onFocus={handleFocus} onInput={handleInput} type="text" id="firstname" name="firstname" placeholder="Prénom" className="form-control" />
                </div>

                <div className="mb-2 col-12">
                    <label htmlFor="email">Email</label>
                    <input onFocus={handleFocus} onInput={handleInput} type="text" id="email" name="email" placeholder="Email" className="form-control" />   
                </div>


                <button type="submit" className="btn btn-primary m-auto mt-5 col-11 col-md-6 col-lg-3">Soumettre</button>     
            </form>
        </section>
        
    )
}