import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userActions } from './redux/actions/user';
import { Helmet } from 'react-helmet';


class Register extends Component {

    state = {
        name:'',
        surname: '',
        email: '',
        password: '',
        repeatpassword: '',
        submitted: false
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { name, surname, email, password, repeatpassword } = this.state;
        if (name && surname && email && password && (password === repeatpassword)) {
            this.props.register(name, surname, email, password, this.props.history)
        }
    }

    render() {
        const { name, surname, email, password, repeatpassword, submitted, alert } = this.state;
        console.log('alert', alert)
        return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>HotAuctions - Register</title>
            </Helmet>

		    <div className="section">

            	<div className="container">

                	<div className="row">

                        {alert && alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }

                        <div className="col-md-6 col-md-offset-3 pt-2">

                            <div className="section-title">
                                <h3 className="title">Register</h3>
                            </div>

                            <form name="form" onSubmit={this.handleSubmit}>
                            
                                <div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
                                    <input type="text" className="form-control" name="name" placeholder="First Name" value={name} onChange={this.handleChange} />
                                    {submitted && !name &&
                                        <div className="help-block">Name is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !surname ? ' has-error' : '')}>
                                    <input type="text" className="form-control" name="surname" placeholder="Last Name" value={surname} onChange={this.handleChange} />
                                    {submitted && !surname &&
                                        <div className="help-block">Surname is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                    <input type="text" className="form-control" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
                                    {submitted && !email &&
                                        <div className="help-block">Email is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !repeatpassword || password !== repeatpassword ? ' has-error' : '')}>
                                    <input type="password" className="form-control" name="repeatpassword" placeholder="Repeat Password" value={repeatpassword} onChange={this.handleChange} />
                                    {submitted && (!repeatpassword || password !== repeatpassword) &&
                                        <div className="help-block">Repeat password is required or does not match</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="primary-btn">Register</button>
                                    <Link to="/login" className="btn btn-link">login</Link>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state
    return { alert } 
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Register)