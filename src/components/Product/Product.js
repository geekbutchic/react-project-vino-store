import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../Context/Context'

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <div>
                <h1>HELLO FROM PRODUCT</h1>
            </div>
        )
    }
}
