import React, { Component } from 'react'

export default class CartItem extends Component {    
    render() {
        //console.log("Hello",this.props.item)
        return (
            <div className = "row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={this.props.item.img} style={{width:"5rem",height:"5rem"}}
                    className="img-fluid" alt="prodcut"></img>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product: </span>
                    {this.props.item.title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">price: $</span>
                    {this.props.item.price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1" 
                            onClick={()=>this.props.value.decrement(this.props.item.id)}
                            >-</span>
                            <span className="btn btn-black mx-1">{this.props.item.count}</span>
                            <span className="btn btn-black mx-1" 
                            onClick={()=>this.props.value.increment(this.props.item.id)}
                            >+</span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={()=>{
                        this.props.value.removeItem(this.props.item.id)
                    }}> 
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                        <strong>item total : $ {this.props.item.total}</strong>
                </div>
            </div>
            
        )
    }
}
