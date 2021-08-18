import React, { Component } from 'react';
import Title  from '../Title/Title'
import { wineProducts } from '../WineDetails/WineDetails'


export default class ProductList extends Component {
    state = {
        product: wineProducts
    }
    render() {
        console.log(this.state.product);
        return (
            <React.Fragment>
                <div className="p-5">
                <div className="container"></div>
                <Title name="VINO " title="SELECTION"/>
                <div className="row"></div>
                </div>
            </React.Fragment>

        )
    }
}
