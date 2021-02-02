import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context'
import {ButtonContainer} from './Button'
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, title, company, img, info, price, inCart } = value.details;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className = "img-fluid" alt="Product"> 
                                    </img>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4>Model : {title}</h4>
                                    <h4 className = "text-title text-uppercase text-muted mt-3 mb-3">
                                        made by: <span className = "text-uppercase">
                                        {company}
                                        </span>
                                    </h4>
                                    <h4 className = "text-blue">
                                        <strong>
                                            price : <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className = "text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:
                                    </p>
                                    <p className = "text-muted lead">
                                        {info}
                                    </p>
                                    <div>
                                        <Link to = "/">
                                            <ButtonContainer>
                                                back To Products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                        cart //This can be passed a value(Props) to the ButtonContainer
                                        //based on the props value we can do the coloring to the button 
                                        disabled={inCart?true:false} onClick = {
                                            ()=>{
                                                value.addToCart(id)
                                                value.openModal(id)
                                            }
                                        }> 
                                            {inCart?"inCart":"Add to Cart"}
                                        </ButtonContainer>
                                    </div>

                                </div>

                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
