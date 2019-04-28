import React, { Component } from 'react'
import AddCharacterForm from './AddCharacterForm.js'
import { withCharacters } from '../context/CharacterProvider.js'

class AddCharacterPage extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            house: ""
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addNewCharacter(this.state)
        this.setState({ name: "", house: "" })
    }

    render(){
        return (
            <div>
                <button onClick={() => this.props.history.goBack()}>Back</button>
                <AddCharacterForm 
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    btnText="Add Character"
                />
            </div>
        )
    }
}

export default withCharacters(AddCharacterPage)