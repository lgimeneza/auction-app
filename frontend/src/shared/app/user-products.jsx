import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions/userProducts'
import openSocket from 'socket.io-client'
import { Helmet } from 'react-helmet';

import ProductCard from './product-card.jsx'

var socket

class UserProducts extends Component {
    
    componentDidMount() {
        this.props.getUserProducts()

        //socket = openSocket('http://localhost:5000')
        socket = openSocket('https://mysterious-basin-61944.herokuapp.com/')

        socket.on('newBid', (productId) => {
            //TODO: Check if product is in the list
            this.props.getUserProducts()
        })
    }

    componentWillUnmount = () => {
        socket.close()
    }

    render() {
    const { userProducts, user } = this.props

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>HotAuctions - Your Auctions</title>
            </Helmet>
            {/* --- SECTION --- */}
            <section className="section">
                <div className="container">

                    {/* --- STORE --- */}
                    <div id="store" className="col-md-12">
                        <div className="row">
                            { userProducts.length ? userProducts.map((product) => {
                                return <ProductCard key={product._id} product={product} user={user} />
                            }): <span>no results</span>}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )}
}

function mapStateToProps(state) {
    const { userProducts, user } = state
    return { userProducts, user }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(UserProducts)