import React, { Component } from 'react'
import Character from './Character.js'
import { withCharacters } from '../context/CharacterProvider.js'

class CharacterList extends Component {
    componentDidMount(){
        this.props.getCharacters()
    }

    render(){
        const { characters, history, deleteCharacter, editCharacter } = this.props
        return (
            <div>
                {/* <button onClick={getCharacters}>Get Characters</button> */}
                <button onClick={() => history.push("/addcharacter")}>Add New Character</button>

                { characters.map(character => 
                    <Character
                        key={character._id} 
                        {...character}
                        deleteCharacter={deleteCharacter}
                        editCharacter={editCharacter}/>) }  
            </div>
        )
    }
}

export default withCharacters(CharacterList)


