import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './Components/Popular'
// Component
// State
// Lifecycle
// UI

// Component Definition
class App extends React.Component{
    render(){
        return(
        <div className="container">
            <Popular/>
        </div>
        )
    }
}

// Component Use
ReactDOM.render(
    <App />,
    document.getElementById('app')
)