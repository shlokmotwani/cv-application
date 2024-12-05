import '../styles/LabelField.css'

function LabelField({text="Dummy Text"}){
    return(
        <div className="container">
            <label>{text}</label>
            <input type="text" />
        </div>
    );
}

export {LabelField}