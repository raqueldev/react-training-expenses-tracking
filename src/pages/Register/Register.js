import React, { Component } from 'react';

export default class RegisterPage extends Component {
    state = {
        email: '',
        password: '',
        name: ''
    }

    onChange = ev => this.setState({
        [ev.target.name]: ev.target.value
    })

    register = async() => {
        const { history, register } = this.props
        await register(this.state)
        
        history.replace('/')
    }

    render() {
        const { email, password, name } = this.state

        return(
            <div onChange={this.onChange}>
                <div>Email: <input name="email" value={email} type="email"/></div>
                <div>Pass: <input name="password" value={password} type="password"/></div>
                <div>Name: <input name="name" value={name} type="name"/></div>
                <button onClick={this.register}>Send</button>
            </div>
        )
    }
}