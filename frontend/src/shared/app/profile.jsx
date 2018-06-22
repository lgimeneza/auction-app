import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { userActions } from './redux/actions/user'

class Profile extends Component {

    componentDidMount(){
        this.props.retrieveUser()
    }

    render() {
        const { name, surname, email, password } = this.props.user
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HotAuctions - User Profile</title>
                </Helmet>

                <div className="section">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-6 col-md-offset-3 pt-2">

                                <div className="section-title">
                                    <h3 className="title">Profile</h3>
                                </div>

                                <form name="form" onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <input type="text" className="form-control" name="name"  placeholder="Name" value={name} onChange={this.handleChange} />
                                    </div>
                                    <div className='form-group'>
                                        <input type="text" className="form-control" name="surname"  placeholder="Surname" value={surname} onChange={this.handleChange} />
                                    </div>
                                    <div className='form-group'>
                                        <input type="text" className="form-control" name="email"  placeholder="Email" value={email} onChange={this.handleChange} />
                                    </div>
                                    <div className='form-group'>
                                        <input type="password" className="form-control" name="password"  placeholder="Password" value={password} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <button className="primary-btn">Save</button>
                                        <Link to="/login" className="btn btn-link">Logout</Link>
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
	const { user } = state
    return {
        user
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(userActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Profile);