import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as categoryActions from './redux/actions/categories'
import * as productsActions from './redux/actions/products'

class Categories extends Component {
    static fetchData({ store }) {
        return store.dispatch(categoriesActions.getCategory())
    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search)
        const categories = params.get('c') ? params.get('c').split(',') : []

        categories.length && categories.forEach(category => localStorage.setItem(category, true))

        this.props.getCategories()
    }

    handleCheck = e => {
        localStorage.setItem(e.target.id, e.target.checked)
        this.props.getCategories()
    }

    render() {
        const { categories } = this.props
        return (

            <div className="aside">
                <h3 className="aside-title">Categories</h3>
                <div className="checkbox-filter">
                    
                    {categories.length && categories.map((category) => {
                        return (

                        <div key={category._id} className="input-checkbox">
                            <input type="checkbox" id={category._id} checked={category.checked} onChange={this.handleCheck}/>
                            <label htmlFor={category._id}>
                                <span></span>
                                {category.name}
                            </label>
                        </div>
                        
                        )
                    })}

                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { categories, query } = state
    return { categories, query  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...categoryActions, ...productsActions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Categories))