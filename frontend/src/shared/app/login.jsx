import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { userActions } from './redux/actions/user'
import { Helmet } from 'react-helmet';


class Login extends Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout()

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password, this.props.history)
        }
    }

    render() {
        const { loggingIn, alert } = this.props;
        const { username, password, submitted } = this.state;
        return (

            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>login</title>
                </Helmet>

		        <div className="section">

                    <div className="container">

                        <div className="row">

                            {alert && alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            }

                            <div className="col-md-6 col-md-offset-3">

                                <div className="section-title">
                                    <h3 className="title">Login</h3>
                                </div>

                                <form name="form" onSubmit={this.handleSubmit}>
                                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                        <input type="text" className="form-control" name="username" placeholder="Email" value={username} onChange={this.handleChange} />
                                        {submitted && !username &&
                                            <div className="help-block">Username is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                        <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                        {submitted && !password &&
                                            <div className="help-block">Password is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <button className="primary-btn">Login</button>
                                        {loggingIn &&
                                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }
                                        <Link to="/register" className="btn btn-link">Register</Link>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}

function mapStateToProps(state) {
    const { user: { loggingIn } , alert } = state
    return { loggingIn, alert }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Login)