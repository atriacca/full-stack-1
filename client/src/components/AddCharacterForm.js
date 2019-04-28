import React from 'react'

const AddCharacterForm = props => {
    const { handleChange, handleSubmit, name, btnText } = props
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={name} onChange={handleChange}/>
            <select name="house" onChange={handleChange}>
                <option value="">- Select a House -</option>
                <option value="stark">Stark</option>
                <option value="tarley">Tarley</option>
                <option value="lannister">Lannister</option>
            </select>
            <button>{btnText}</button>
        </form>
    )
}

export default AddCharacterForm