import React, { Component } from 'react'
import signupFunction from '../redux/actioncreators/signupAction'
import { connect } from 'react-redux'

class SignUp extends Component {

    // state = {
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     password: "",
    //     formState: { email: null, password: null, firstname: null, lastname: null },
    // }

    constructor(props){
        super(props);
    }

    handleSignUp = (e) => {
        e.preventDefault()
        let payload = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
        }
        this.props.signupFunction(payload);
        e.target.reset();
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }




    render() {
        return (
            <form onSubmit={this.handleSignUp}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="first_name" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="last_name" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">Sign in?</a>
                </p>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.signupReducer.isFetching
    }
}

export default connect(mapStateToProps, { signupFunction })(SignUp)