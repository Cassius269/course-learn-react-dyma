function Button({type, children}){

    console.log(children)
    return <button type={type} className="btn btn-primary m-auto mt-5 col-11 col-md-6 col-lg-3">{children}</button>
}

export default Button;