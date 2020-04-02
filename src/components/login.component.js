import React, { Component } from 'react'
import loginFunction from '../redux/actioncreators/loginAction';
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props){
        super(props);
    }


    handleSignIn = (e) => {
        e.preventDefault()
        let payload = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginFunction(payload);
        e.target.reset();
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (

            <form onSubmit={this.handleSignIn}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">Password?</a>
                </p>
            </form>
           
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.loginReducer.isFetching
    }
}

export default connect(mapStateToProps, { loginFunction })(Login)