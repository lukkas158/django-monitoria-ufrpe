import React from 'react'

export class RegisterForm extends React.Component {

    render() {
        return (
            <form>
                <input type='email' name='email' />
                <input type='text' name='first_name'/>
                <input type='text' name='last_name'/>
                <input type='password' name='password'/>
                <input type='password'name='password'/>
                <select>
                    <option value="LC">Licenciatura em Computação</option> 
                    <option value="BCC">Bacharelado em Ciências da Computação</option>
                    <option value="BSI">Bacharelado em Sistemas da Informção</option>
                </select>
                <button type='submit'>Vamos lá!</button>
            </form>
        );

    }
}