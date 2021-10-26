import React from "react";

export const ButtonNameChange = (props) => {
    const handleForm = (e) => {
        e.preventDefault();
        console.log(e)
        const newName = e.target.newName.value;
        console.log(newName);
        props.changeName(newName);
    }

    return (
        <form onSubmit={handleForm}>
            <div className="mb-3">
                <label htmlFor="newName" className="form-label">New Name</label>
                <input type="text" className="form-control" id="newName" />
            </div>
            <input type='submit' value='Submit' className='btn btn-secondary' />
        </form>
    )
}