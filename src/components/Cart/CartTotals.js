import React from 'react'
import {Link} from 'react-router-dom'

export default function CartTotals({value}) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                    text-capitalize text-right">
                        <Link to = "/">
                            <button className="btn btn-outline-danger text-uppercase  px-5" type="button" 
                            onClick = {()=>{
                                value.clearCart()
                            }}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                            &nbsp;
                            <strong>$ {value.cartSubTotal}</strong>
                        </h5> 
                        <h5>
                            <span className="text-title">
                                tax : 
                            </span>
                            &nbsp;
                            <strong>${value.cartTax}</strong>
                        </h5> 
                        <h5>
                            <span className="text-title">
                                total :
                            </span>
                            &nbsp;
                            <strong>${value.cartTotal}</strong>
                        </h5>        
                    </div>
                </div>
            
            </div>
        </React.Fragment>
        
    )
}
