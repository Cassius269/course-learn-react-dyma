const InputPlusLabel = ({onFocus, type, name, placeholder}) => {
    console.log(onFocus);

    return (
        <div className="mb-2 col-12">
            <label htmlFor={name} className="form-label">{placeholder}</label>
            <input onFocus={onFocus} type={type} id={name} name={name} placeholder={placeholder} className="form-control" />   
        </div>
    )
};

export default InputPlusLabel;