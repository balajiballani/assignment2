//inorder to avoid the props drilling we are mainting the data in one area 
// and we are directly accessing the data(data.js) from that
import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'
//Creating Context is done in Three Steps
//1st Step Create a context
//2nd Step Provide a context
//3rd Step Consume the  Context Value
//1st Step Create a context

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products:[],
        details:detailProduct, //we are not disturbing this value since we are not changing the value of it 
        cart:[],
        modalOpen:false,
        modalProdcut:detailProduct,
        cartSubTotal : 0,
        cartTax : 0,
        cartTotal:0
    }
    /* Here comes a value by Refrence problem if
     we modifiy the state then it automatically gonna change in the storeProductsArray
     var flash = [8,8,8];
     var quicksilver = flash;   //assign-by-reference
     quicksilver.push(0);
     console.log(flash);        //[8,8,8,0]
     console.log(quicksilver);  //[8,8,8,0] 
     consider the above example likewise if we change the products this gonna change in storeProducts
    */
    /* tester = () =>{
        console.log("State Products: ",this.state.products[0].inCart);
        console.log("Store Products: ",storeProducts[0].inCart);
        const tempProducts = [...this.state.products];
        tempProducts[0].inCart = true;
        this.setState(()=>{
            return {products:tempProducts}
        },()=>{
            console.log("After Products:",this.state.products[0].inCart);
            console.log("After Store Products:",storeProducts[0].inCart)
        })
        This Method shows that the storeProducts data also changed to true so we miss the orginal copy
        of data this has to be overcome by declaring the tempProdcuts array and passing the storeProducts
        to tempProducts and setting the products property to tempproducts
    } */

   componentDidMount(){
       {/*First the state is updated as empty in render once the rendering
        is done componentDidMonut gets called and calls the setProducts where state is again updated calling the 
    render funtion again(since this.setState renders the component) 
and set the prodcut values in the productList */}
       this.setProducts();
   } 
   setProducts = () =>{
       let tempProducts = []
       storeProducts.forEach((item =>{
         {/*This addition of elements into an array is a new way that comes with ES6 
        var meat= ['Bacon','Ham']
        var fruits = ['Apple','Cherry','Guava']
        if we want to add the elements of two array and bring a brand new array we do not need to perform all the 
        push operations stuff ES6 gives the simple cut as below
        var fruits = ['Apple',...meat,'Cherry','Guava']that's it we get an array of fruits with new elemets as
        below 
        ['Apple','Bacon','Ham','Cherry','Guava']
        Same is applied below item has prodcut and added into tempProducts
        */}
         
           const singleItem = {...item};
           tempProducts = [...tempProducts,singleItem]
           console.log("tempProducts :",tempProducts)
       }))
       this.setState(()=>{
           return {products:tempProducts}
       })
       
   }
   getItem = (id)=>{
    const product = this.state.products.find(item=>item.id === id)
    return product;
   }
 
    addToCart = (id) =>{
        let tempProdcuts = [...this.state.products];
        /*This is for changing the property of the prodcut as well say if we click on add to cart
        the property inCart should be changed to true if we do not set the state again after rendering 
        the page we get the actual values not the updated values so we copy the products into the temp 
        and update the state of the products once it is added to Cart and returning the product Array
        which is updated */
        const index = tempProdcuts.indexOf(this.getItem(id));
        const product = tempProdcuts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return{product:tempProdcuts,cart:[...this.state.cart,product]}//cart : Here we add the items that have added to cart 
        },()=>{
            this.addTotals();
        })

    }
    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {details:product}
        })
    }
    openModal = (id) =>{
     const prodcut = this.getItem(id);
     this.setState(()=>{
         return{modalProdcut:prodcut,modalOpen:true}
     })
    }
    closemodal = ()=>{
        this.setState(()=>{
            return{modalOpen:false}
        })
    }
    increment = (id) =>{
       let tempCart = [...this.state.cart]
       const selectedProdcut = tempCart.find(item=>item.id===id)
       const index = tempCart.indexOf(selectedProdcut)
       const product = tempCart[index]
       product.count = product.count+1;
       product.total = product.price * product.count
       this.setState(()=>{
           return{cart:[...tempCart]}
       },()=>{
           this.addTotals();
       })  
      
    }
    decrement = (id) =>{
        let tempCart = [...this.state.cart]
        const selectedProdcut = tempCart.find(item=>item.id===id)
        const index = tempCart.indexOf(selectedProdcut)
        const product = tempCart[index]
        product.count = product.count-1;
        if(product.count === 0){
            this.removeItem(id)
        }
        else{
            product.total = product.price * product.count
       this.setState(()=>{
           return{cart:[...tempCart]}
       },()=>{
           this.addTotals();
       }) 
        }
        
    }
    removeItem = (id) =>{
        let tempProdcuts = [...this.state.products];
        /*This is for changing the property of the prodcut as well say if we click on add to cart
        the property inCart should be changed to true if we do not set the state again after rendering 
        the page we get the actual values not the updated values so we copy the products into the temp 
        and update the state of the products once it is added to Cart and returning the product Array
        which is updated */
        let tempCart = [...this.state.cart]
        const index = tempProdcuts.indexOf(this.getItem(id));
        const product = tempProdcuts[index];
        product.inCart = false;
        //product.count = 1;
        this.setState(()=>{
            return{product:tempProdcuts,cart:tempCart.filter(cart=>cart.id!==id)}//cart : Here we add the items that have added to cart 
        },()=>{
            this.addTotals();
        })
    }
    addTotals = ()=>{
        let subTotal = 0;
        this.state.cart.map(item=>{
            subTotal += item.total 
        })
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2))
        const cartTotal = subTotal+tax;
        this.setState(()=>{
            return{cartSubTotal:subTotal,cartTax:tax,cartTotal:cartTotal}
        })

    }
    clearCart = () =>{
       this.setState(()=>{
           return{cart:[]}
       },()=>{
           this.setProducts();
           this.addTotals();
       })
    }


    render() {
        return (
            <ProductContext.Provider value = {{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closemodal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>  
            {/* <button onClick={this.tester}>Test</button> */}
             {/* Second Step Providing the context 
                here where we pass out data Say
            data.Js and consume in our ProductList.Js this may be an Object or a String value */}
            {this.props.children}{/*sending the props down to the requested children unless we send the 
            props our application not gonna start since this(Product Provider) the top level component in index.js */}
                         
            </ProductContext.Provider>
            
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer}