import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default class LoginPage extends Component {
    onChange = ev => this.setState({
        [ev.target.name]: ev.target.value
    })

    login = async values => {
        const { history, login } = this.props
        await login(values)
        history.replace('/')
    }

    render() {
        return(
            <Formik initialValues={{ email: '', password: ''}} onSubmit={this.login}>
            {() => <Form>
                <div>Email: <Field name="email" type="email" /></div>
                <div>Password: <Field name="password" type="password" /></div>
                <button type="submit">Login</button>
            </Form>}
            </Formik>

        )
    }
}