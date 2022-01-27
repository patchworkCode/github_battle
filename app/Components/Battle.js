import React from 'react'
import PropTypes from 'prop-types'
import Sword from 'remixicon-react/SwordLineIcon'
import Git from 'remixicon-react/GithubLineIcon'
import Trophy from 'remixicon-react/TrophyLineIcon'

function Instructions(){
    return(
        <div className="m-auto font-custom">
            <h1 className="text-5xl font-bold text-center p-5 selection:bg-pink-200">
                INSTRUCTIONS
            </h1>
            <hr className="border-black border-2"/>
            <ol className="place-items-center grid grid-cols-3 gap-3 pt-5">
                <li className="border-4 border-black p-5 bg-gray-100">
                    <h3 className="text-center font-bold">ENTER USERS</h3>
                    <Git size={140}/>
                </li>
                <li className="border-4 border-black p-5 bg-gray-100">
                    <h3 className="text-center font-bold">BATTLE</h3>
                    <Sword size={140}/>
                </li>
                <li className="border-4 border-black p-5 bg-gray-100">
                    <h3 className="text-center font-bold">SEE WINNER</h3>
                    <Trophy size={140}/>
                </li>
            </ol>
        </div>
    )
}

class PlayerInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username : ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()

    this.props.onSubmit(this.state.username)
  }
  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }
  render(){
   return( 
      <form className='tailwind' onSubmit={this.handleSubmit}>
        <label htmlFor='username' className='tailwind'>
        {this.props.label}
        </label>
        <div>
          <input 
            type='text'
            id='username'
            className='tailwind'
            placeholder='github username'
            autoComplete='off'
            onChange={this.handleChange}
            />
          <button 
            className='tailwind' 
            type='submit'
            disabled={!this.state.username}
          >
              Submit
          </button>
        </div>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default class Battle extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Instructions className="font-custom"/>

                <PlayerInput label="Label!" onSubmit={(value) => console.log('value!', value)} />
            </React.Fragment>
        )
    }
}
