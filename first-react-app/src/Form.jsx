import React from 'react';

function handleSubmit(e){
    e.preventDefault();
    console.log("submit!!");
}

function Form({message, buttonText}) {
    return (
        <form onSubmit={handleSubmit}>
            <button>Submit</button>
        </form>
    );
}

export default Form;