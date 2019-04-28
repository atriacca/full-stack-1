import React from 'react'
import CharacterList from './components/CharacterList.js'
import AddCharacterPage from './components/AddCharacterPage.js'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Switch>
                <Route 
                    exact path="/"       
                    render={(rProps) => <CharacterList {...rProps}/>}/>
                <Route 
                    path="/addcharacter" 
                    render={(rProps) => <AddCharacterPage {...rProps}/>}/>
            </Switch>
        </div>  
    )
}

export default App