import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Nouislider from 'react-nouislider'

class Slider extends Component {
    
    state = {
        range: [0, 3000],
        priceMin: 0,
        priceMax: 3000,
    }

    componentDidMount(){

        const { range } = this.state

        const params = new URLSearchParams(this.props.location.search)
        const prices = params.get('p') ? params.get('p').split(',').map(price => Number(price)) : [] 

        prices[0] > range[0] ? localStorage.setItem('priceMin', prices[0]) : localStorage.removeItem('priceMin')
        prices[1] < range[1] ? localStorage.setItem('priceMax', prices[1]) : localStorage.removeItem('priceMax')
        
        const priceMin = Number(localStorage.getItem('priceMin'))
        const priceMax = Number(localStorage.getItem('priceMax'))

        priceMin && this.setState({ priceMin })
        priceMax && this.setState({ priceMax })

    }

    componentDidUpdate(){

        const { range, priceMin, priceMax } = this.state

        priceMin > range[0] ? localStorage.setItem('priceMin', priceMin) : localStorage.removeItem('priceMin')
        priceMax < range[1] ? localStorage.setItem('priceMax', priceMax) : localStorage.removeItem('priceMax')

    }


    handleChange = e => {

        let { name, value } = e.target;
        const { range } = this.state

        name === 'priceMin' && value > range[1] && (value = range[1])
        name === 'priceMin' && value < range[0] && (value = range[0])
        name === 'priceMax' && value > range[1] && (value = range[1])
        name === 'priceMax' && value < range[0] && (value = range[0])

        this.setState({ [name]: Math.round(value) });

    }


    render() {
        
        return (
            <div className="aside">
                <h3 className="aside-title">Price</h3>
                <div className="price-filter">

                    <div id="price-slider">
                        <Nouislider range={{ min: this.state.range[0], max: this.state.range[1] }} start={[this.state.priceMin, this.state.priceMax]} connect={true} 
                            onChange={(values) =>  {
                                this.setState({ priceMin: Math.round(values[0]), priceMax: Math.round(values[1]) })
                            } } />
                    </div>

                    <div className="input-number price-min">
                        <input id="price-min" type="number" name='priceMin' value={this.state.priceMin} onChange={this.handleChange}/>
                        <span className="qty-up" onClick={() => this.state.priceMin < this.state.range[1] && this.setState({ priceMin:this.state.priceMin +10 })}>+</span>
                        <span className="qty-down" onClick={() => this.state.priceMin > this.state.range[0] && this.setState({ priceMin:this.state.priceMin -10 })}>-</span>
                    </div>

                    <span></span>

                    <div className="input-number price-max">
                        <input id="price-max" type="number" name='priceMax' value={this.state.priceMax} onChange={this.handleChange}/>
                        <span className="qty-up" onClick={() => this.state.priceMax < this.state.range[1] && this.setState({ priceMax:this.state.priceMax +10 })}>+</span>
                        <span className="qty-down" onClick={() => this.state.priceMax > this.state.range[0] && this.setState({ priceMax:this.state.priceMax -10 })}>-</span>
                    </div>

                </div>
            </div>

        )
    }
}


export default withRouter(Slider)