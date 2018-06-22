import React, { Component } from 'react';
import Countdown from './countdown.jsx'
import { withRouter } from 'react-router-dom'

class ProductCard extends Component {

    onProductClickHandler = id => e => {
        e.preventDefault()
        this.props.history.push(`/product/${id}`)
    }

    renderProductInfo(){
        const { product, user } = this.props
        let sd = new Date(product.startDate)
        sd.setDate(sd.getDate() + 7)

        if (product.closed) {
            //Products closed or Products closed and you've won
            return (
                <div className="product-label">
                    <span className="sale">CLOSED</span>
                    {user && user._id === product.winningUser ? <span className='new'>YOU WON</span> : <span className='new-hidden'></span>}
                </div>
            )
                
        } else {

            if (user && user._id === product.currentUser){
                return (
                    <div className="product-label">
                        <Countdown date={product.endDate}/>
                        <span className='new'>WINING</span>
                    </div>
                )
            }

            return (
                <div className="product-label">
                    <Countdown date={product.endDate}/>
                    {sd > Date.now() ? <span className='new'>NEW</span> : <span className='new-hidden'></span>}
                </div>
            )
        }
    }

    render() {
        const { product } = this.props
        
        return (

            <div className="col-xs-6 col-sm-4 col-md-4 " key={product._id} onClick={this.onProductClickHandler(product._id)}> 
                <div className="product animated fadeIn">
                    <div className="product-img">
                        <img src={product.images[0]} alt=""/>
                        {this.renderProductInfo()}
                    </div>
                    <div className="product-body">
                        <h3 className="product-name"><a href="#">{product.title}</a></h3>
                        <h4 className="product-price">{product.currentPrice}€</h4>
                        <div className="product-rating"/>
                        <button type="button" className={`primary-btn ${ product.closed && 'closed' }`}>Make offer</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(ProductCard)