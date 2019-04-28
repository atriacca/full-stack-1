import React, { Component  } from 'react'
import AddCharacterForm from './AddCharacterForm.js'

class Character extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            name: this.props.name,
            house: this.props.house
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            name: this.state.name,
            house: this.state.house
        }

        this.props.editCharacter(this.props._id, updates)
        this.toggler()
    }

    render(){
        const { name, house, isAlive, _id, deleteCharacter } = this.props 
        
        let houseColor
        switch(house){
            case "tarley":
                houseColor = "brown"
                break
            case "stark":
                houseColor = "grey"
                break
            case "lannister":
                houseColor = "gold"
                break
                default:
                houseColor = "pink"
        }

        return (
            <div style={{ border: '1px solid black', backgroundColor: houseColor, height: 200}}>
                { this.state.editToggle ?
                // syntax for declaring fragments, looks like empty tags but acts as div but without changing parent/chid relationship
                    <> 
                        <AddCharacterForm 
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            name={this.state.name}
                            btnText="Edit Character"
                        />
                        <button onClick={this.toggler}>Close</button>
                    </>
                :
                    <>
                        <h1>{name}</h1>
                        <p>House: {house[0].toUpperCase() + house.slice(1)}</p>
                        <p>Is Alive: {isAlive.toString()}</p>
                        <button onClick={() => deleteCharacter(_id)}>Delete</button>
                        <button onClick={this.toggler}>Edit</button>
                    </>
                }
            </div>
        )
    }

}

export default Character