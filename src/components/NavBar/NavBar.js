import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        const { logout } = this.props
        return(
            <div>
                <Link to='/expenses'>Expenses</Link>
                <button onClick={logout}>Logout</button>
            </div>
        )
    }
}

