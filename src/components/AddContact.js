import React, { Component } from 'react'

export default class AddContact extends Component {
  state = {
    name : "",
    email : "",
  }

  add = (e) =>{
    e.preventDefault();
    if(this.state.name === '' && this.state.email === ''){
      alert('All the fields are required')
      return
    }
    this.props.addContactHandler(this.state);
    this.setState({name:'', email:''});
    console.log(this.state)
  }

 



  render() {
    return (
      <div className='ui main'>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={this.add}>
            <div className='field'>
                <label>Name</label>
                <input type='text' name='name' onChange={(e) => this.setState({name : e.target.value})} value={this.state.name} placeholder='Name'/>
                <label>Email</label>
                <input type='text' name='email' onChange={(e) => this.setState({email : e.target.value})} value={this.state.email} placeholder='Email'/>
            </div>
            <button className='ui button blue'>Submit</button>
        </form>
       
      </div>
    )
  }
}
