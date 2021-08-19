import React, { Component } from 'react'
import { wineProducts, detailProduct } from '../components/Data/Data';

const ProductContext = React.createContext();
//PROVIDER AND CONSUMER

class ProductProvider extends Component {
    state = {
        products: wineProducts,
        detailProduct: detailProduct,
    }
    handleDetail = () => {
        console.log('HELLO FROM DETAIL');
    };
    addToCart = () => {
        console.log('HELLO FROM CART');
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};