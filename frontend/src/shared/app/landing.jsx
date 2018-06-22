import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions/products'
import openSocket from 'socket.io-client'
import { Helmet } from 'react-helmet';

import ProductCard from './product-card.jsx'
import Categories from './categories.jsx'
import Slider from './slider.jsx';

import { search } from '../helpers/search'

var socket

class Landing extends Component {

    static fetchData({ store }) {
        return store.dispatch(actions.getProducts('', [] , []))
    }
    
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search)
        const query = params.get('q') || ''
        const categories = params.get('c') ? params.get('c').split(',') : []
        const prices = params.get('p') ? params.get('p').split(',').map(price => Number(price)) : [] 

        this.props.getProducts(query, categories , prices)


        //socket = openSocket('http://localhost:5000')
        socket = openSocket('https://mysterious-basin-61944.herokuapp.com/')

        socket.on('newBid', (productId) => {
            //TODO: Check if product is in the list
            this.props.getProducts(query, categories , prices)
        })

    }

    componentWillUnmount = () => {
        socket.close()
    }

    handleSubmit = () => {

        const { query, categories } = this.props

        const url = search(query, categories)
		this.props.history.push(url)
    }

    handleClear = () => {

        const { categories } = this.props
        categories.forEach(category => {
            localStorage.removeItem(category._id)
        })
        localStorage.removeItem('priceMin')
        localStorage.removeItem('priceMax')

        this.props.history.push('/')

    }

    render() {
    const { products } = this.props
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>HotAuctions - Landing</title>
            </Helmet>
            {/* --- SECTION --- */}
            <section className="section">
                <div className="container">
                    <div className="row"> 
                    
                        {/* --- ASIDE --- */}
                        <aside id="aside" className="col-md-3">
                            <Categories />
                            <Slider />
                            <div className="filter-buttons">
                                <button className="filter-btn apply" onClick={this.handleSubmit}>Apply</button>
                                <button className="filter-btn clear" onClick={this.handleClear}>Clear</button>
                            </div>
                        </aside>

                        {/* --- STORE --- */}
                        <div id="store" className="col-md-9">
                            <div className="row">
                                { products.length ? products.map((product) => {
                                    return <ProductCard key={product._id} product={product} />
                                }): <span>We couldn't find any products</span>}
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
    )}
}

function mapStateToProps(state) {
    const { products, query, categories } = state
    return { products, query, categories }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Landing)