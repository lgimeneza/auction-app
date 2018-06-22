import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions/product'
import openSocket from 'socket.io-client'

import ReactSlick from "react-slick"
import Countdown from './countdown.jsx'

var socket

class Product extends Component {
    static fetchData({ store, params: { id } }) {
        return store.dispatch(actions.getProduct(id));
    }

    state = {
        bid:0,
        priceClass:'',
        bidClass:'',
        slickImg: null,
        slickImgs: null,
        nav1: null,
        nav2: null,
        submitted: false,
    }

    componentDidMount = () => {
        const { match: { params: { id } }, product: { currentPrice } } = this.props

        //socket = openSocket('http://localhost:5000')
        socket = openSocket('https://mysterious-basin-61944.herokuapp.com/')

        socket.on('newBid', (productId) => {
            if (id === productId){

                this.props.getProduct(id)
                .then(()=>{
                    this.setState( { bid: Number(this.props.product.currentPrice), priceClass: 'flash' }, () =>{
                        setTimeout(() => this.setState({priceClass: ''}),1000)
                    })
                })
            }
        })

        socket.on('error', (error) => {
            console.log('socket error')
        })

        this.props.getProduct(id)

        if (currentPrice){
            console.log('didMount', currentPrice)
            this.setState({ 
                bid: currentPrice, //when comes from server
                nav1: this.slider1,
                nav2: this.slider2
             })
        } else {
            this.setState({ 
                nav1: this.slider1,
                nav2: this.slider2
             })
        }
    }

    componentDidUpdate = (prevProps) => {
        const { product: { currentPrice } } = this.props

        if (currentPrice && prevProps.product.currentPrice !== currentPrice) {
            this.setState({ bid: currentPrice })
        } 
    } 

    componentWillUnmount = () => {
        socket.close()
    }

    handleChange = e => {
        let { name, value } = e.target

        this.setState({ [name]: Math.round(Number(value)) });
    }

    handleSubmit = e => {
        e.preventDefault()

        //TODO check bid
        const { product, user } = this.props

        if (Object.keys(user).length === 0) {

            this.props.history.push('/login')

        } else {

            const { bid } = this.state

            if (product._id && user._id && bid && bid > product.currentPrice) {
                this.props.addProductBid(product._id, user._id, bid)
                .then(() => {
                    this.props.getProduct(product._id);
                })
            }
            else {
                //this.setState({ submitted: true })
                this.setState( { bidClass: 'flash' }, () =>{
                    setTimeout(() => this.setState({bidClass: ''}),1000)
                })
                //TODO: Throw Error Something went wrong
            }

        }

    }

    render() {

        const { product } = this.props
        const { priceClass, bidClass, submitted } = this.state
        const settingsImgs = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: 0,
            vertical: true,
            asNavFor: this.state.nav1,
            ref: slider => (this.slider2 = slider)
        }
        const settingsImg = {
            infinite: true,
            speed: 300,
            dots: false,
            arrows: true,
            fade: true,
            asNavFor: this.state.nav2,
            ref: slider => (this.slider1 = slider)
        }

        return (

        <div className="section">
            <div className="container">
            <div className="row">

                {product.images && product.images.length && (
                    <div>
                        <div id='product-main-img' className="product-preview col-md-5 col-md-push-2">

                            <ReactSlick {...settingsImg} >
                                {product.images.map((image, index) => {
                                    return (
                                        <img key={index} src={image} alt=''/>
                                    )
                                })}
                            </ReactSlick>
                        </div>

                        <div id='product-imgs' className="col-md-2  col-md-pull-5 hidden-xs">
                            <ReactSlick  {...settingsImgs} >
                                {product.images.map((image, index) => {
                                    return (
                                        <img key={index} src={image} alt=''/>
                                    )
                                })}
                            </ReactSlick>
                        </div>
                    </div>
                )}
                <div className="col-md-5">
                <div className="product-details">
                    <h2 className="product-name">{product.title}</h2>
                    <div>
                    <h3 className={`product-price animated ${priceClass}`}>{product.currentPrice}€ </h3>
                    <span className="product-available">{product.closed ? 'Closed' : product.endDate && <Countdown date={product.endDate}/>}</span>
                    </div>
                    <p>{product.description}</p>

                    {!product.closed &&
                        <div className="add-to-cart" >
                            <div className="qty-label">
                                <span className={`animated ${bidClass}`}>Enter your bid</span>  
                                <div className="input-number">
                                    <input type="number" name='bid' value={this.state.bid} onChange={this.handleChange} />
                                <span className="qty-up" onClick={() => this.setState({ bid:this.state.bid +10 })} >+</span>
                                <span className="qty-down" onClick={() => this.state.bid > product.currentPrice && this.setState({ bid:this.state.bid -10 })} >-</span>
                                </div>
                            </div>
                            <button  onClick={this.handleSubmit} className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Submit bid</button>
                        </div>
                    }


                    <ul className="product-links">
                    <li>Share:</li>
                    <li><a href="#"><i className="fab fa-facebook" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-google-plus" /></a></li>
                    <li><a href="#"><i className="far fa-envelope" /></a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }}

function mapStateToProps(state) {
    const { product, user } = state
    return { product, user }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Product);