import React, { Component } from 'react';
import Title  from '../Title/Title'


export default class ProductList extends Component {
    state = {
        vino: []
    }
    render() {
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
