import React from 'react'

export class RegisterForm extends React.Component {

    constructor(props) {
        super(props)
        this.register = this.register.bind(this)

        this.state = {
            emailError: '',
            passwordError: '',
            passwordNotEqualError: '',
            firstnameError: '',
            lastnameError: '' 
        }

    }


    register(event) {
        event.preventDefault()
        const {_email, _first_name, _last_name, _course, _password, password2 } = this.refs
        inputErrors = {}
        if(_email.validity.typeMismatch) {
            inputErrors.emailError = 'Email inválido'
            console.log(inputErrors)
        }


        

    }

    render() {
        return (
            <div className='register-form'>
                <div className='form-container'>
                    <h2>Registre-se agora !</h2>
                    <br/>
                    <form onSubmit={this.register} noValidate>
                        Email: <input ref='_email' type='email' name='email'  required/>
                        <span> </span>
                        Primeiro Nome: <input ref='_first_name' type='text' name='first_name' required />
                        Segundo Nome: <input ref='_last_name' type='text' name='last_name' required />
                        Senha: <input ref='_password' type='password' name='password' required />
                        Digite novamente: <input ref='_password2' type='password' name='password' required/>
                        Curso:
                        <select ref='_course' required >
                            <option value="LC">Licenciatura em Computação</option> 
                            <option value="BCC">Bacharelado em Ciências da Computação</option>
                            <option value="BSI">Bacharelado em Sistemas da Informção</option>
                        </select>
                        <button type='submit'>Vamos lá!</button>
                    </form>
                </div>
            </div>
        );

    }
}