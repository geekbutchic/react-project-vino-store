import React, { Component } from 'react';
import Title  from '../Title/Title'
import { wineProducts } from '../Data/Data'
import { ProductConsumer } from '../../Context/Context'


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
                <div className="row">
                <ProductConsumer>
                    {(value) => {
                        return <h1>{value}</h1>
                    }}
                </ProductConsumer>
                </div>
                </div>
            </React.Fragment>

        )
    }
}
