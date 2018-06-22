import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { userActions } from './redux/actions/user'
import * as productsActions from './redux/actions/products'
import * as queryActions from './redux/actions/query'

import { search } from '../helpers/search'

class NavBar extends Component {
    static fetchData() {
		
	}

	state = {
        query: '',
    }
	
	componentDidMount() {
		const params = new URLSearchParams(this.props.location.search)
		const query = params.get('q') || ''

		this.query !== query && this.setState({ query })
		this.props.retrieveUser()
	}
	
	handleChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleSubmit = e => {
		e.preventDefault();

		const { query } = this.state
		this.props.setQuery(query)
		
		const url = search(query, this.props.categories)
		this.props.history.push(url)	
	}

	handleHomeLink = e => {
		e.preventDefault();

		this.setState({ query: '' })
		this.props.setQuery('')
		this.props.history.push('/')
	}

    render() {
		const { user } = this.props
        return (
        <div>
        <header>

			{/* <!-- TOP HEADER --> */}
			<div id="top-header">
				<div className="container">
					<ul className="header-links pull-left">
						<li><a href="#"><i className="fas fa-phone"></i> +021-95-51-84</a></li>
						<li><a href="#"><i className="far fa-envelope"></i> email@email.com</a></li>
					</ul>
					<ul className="header-links pull-right">
						<li> 
							<Link to='/profile'><i className="far fa-user"></i> { Object.keys(user).length ? 'My Account' : 'Sign in  ' } </Link> 
						</li>
					</ul>
				</div>
			</div>

			{/* <!-- MAIN HEADER --> */}
			<div id="header">
				<div className="container">
					<div className="row">
						{/* <!-- LOGO --> */}
						<div className="col-md-3">
							<div className="header-logo">
								<Link to='/' onClick={this.handleHomeLink} >HotAuctions</Link>
							</div>
						</div>

						{/* -- SEARCH BAR -- */}
						<div className="col-md-6">
							<div className="header-search">
								<form onSubmit={this.handleSubmit}>
									<input className="input" placeholder="Search here" name='query' value={this.state.query} onChange={this.handleChange}/>
									<button className="search-btn">Search</button>
								</form>
							</div>
						</div>

						{/* -- ACCOUNT -- */}
						<div className="col-md-3 clearfix">
							<div className="header-ctn">
								{/* -- Wishlist -- */}
								<div>
									<Link to='/user/products'>
										<i className="fas fa-gavel"></i>
										<span>Your Auctions</span>
									</Link>
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>
		</header>
        <nav id="navigation"></nav>
        </div>
        );
    }
}
function mapStateToProps(state) {
	const { user, categories, query } = state
    return { user, categories, query }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...userActions, ...productsActions, ...queryActions }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(NavBar))