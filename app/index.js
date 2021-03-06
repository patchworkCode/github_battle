import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './Components/Popular'
import Battle from './Components/Battle'
// Component
// State
// Lifecycle
// UI

// Component Definition
class App extends React.Component{
    render(){
        return(
        <div className=' max-w-screen-lg m-auto bg-white items-center'>
            <Battle/>
        </div>
        )
    }
}

// Component Use
ReactDOM.render(
    <App />,
    document.getElementById('app')
)