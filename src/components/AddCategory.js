import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const valueHandle = ( e ) =>{
        setInputValue( e.target.value );
    }

    const submitHandle = ( e ) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={ submitHandle }>
            <div className="form-group">
                <input type="text" className="form-control" value={ inputValue } onChange={ valueHandle } />
            </div>
            <button className="btn btn-primary" onClick={ submitHandle }>Agregar</button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
