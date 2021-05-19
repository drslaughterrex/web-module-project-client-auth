import React from 'react';
import axios from 'axios';




class Login extends React.Component{
    state = {
        body: {
            username: '',
            password: '',
            isLoading: false
        }
    };

    handleChange = e => {    
        this.setState({
            body: {
                ...this.state.body,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.body) 

             .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload); 
                this.props.history.push('/protected');
             }) 
             .catch(err => console.log(err));


    };

    render() {
    return(
        <div>
            <form onSubmit={this.login}>
                <input  
                    type='text'
                    name='username'
                    placeholder='username'
                    value={this.state.body.username}
                    onChange={this.handleChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={this.state.body.password}
                    onChange={this.handleChange}
                />
                <button>Login</button>
            </form>
        </div>
        );
    }
}

export default Login;