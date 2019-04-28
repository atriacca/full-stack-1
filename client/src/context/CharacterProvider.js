import React, { Component } from 'react'
import axios from 'axios'

const CharacterContext = React.createContext()
// Provider,  Consumer

export default class CharacterProvider extends Component{
    constructor(){
        super()
        this.state = {
            characters: []
        }
    }
 
    getCharacters = () => {
        axios.get("/characters")
            .then(res => {
                this.setState({ characters: res.data })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    addNewCharacter = newCharacter => {
        axios.post("/characters", newCharacter)
            .then(res => {
                this.setState(prevState => ({
                    characters: [...prevState.characters, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    deleteCharacter = _id => {
        axios.delete(`/characters/${_id}`)
            .then(res => {
                this.setState(prevState => ({
                    characters: prevState.characters.filter(character => character._id !== _id)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    editCharacter = (_id, updates) => {
        axios.put(`/characters/${_id}`, updates)
            .then(res => {
                this.setState(prevState => ({
                    characters: prevState.characters.map(character => character._id === _id ? res.data : character)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
   
    render(){
        return (
            <CharacterContext.Provider
                value={{
                    ...this.state,
                    getCharacters: this.getCharacters,
                    addNewCharacter: this.addNewCharacter,
                    deleteCharacter: this.deleteCharacter,
                    editCharacter: this.editCharacter
                }}>
                { this.props.children }
            </CharacterContext.Provider>
        )
    }
}


export const withCharacters = C => props => (
    <CharacterContext.Consumer>
        {value => <C {...value} {...props}/>}
    </CharacterContext.Consumer>
)