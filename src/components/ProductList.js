import React, { Component } from 'react'
import Title from './Title'
import {ProductConsumer} from '../context'
import Product from './Product'
export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="my-5">
                    <div className="container">
                        <Title name="My  " title="products" ListOrProdcut="list" ></Title>
                        <div className = "row">
                             <ProductConsumer>
                                {(hello)=>{     {/* Always use function to get the value from Context-Provider*/}
                                    return hello.products.map(product=>{
                                        return <Product key = {product.id} product = {product}/>
                                    })
                                }}   
                            </ProductConsumer> 

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
