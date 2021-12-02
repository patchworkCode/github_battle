import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// Component
// State
// Lifecycle
// UI

// Component Definition
class App extends React.Component{
    render(){
        return(
        <div>
            Hello World!
        </div>
        )
    }
}

// Component Use
ReactDOM.render(
    <App />,
    document.getElementById('app')
)