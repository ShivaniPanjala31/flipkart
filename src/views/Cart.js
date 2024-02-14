import { useEffect, useState } from "react";

function Cart(){
    const [cart, setCart] = useState([]);
    const [isShowModal,setIsShowModal] = useState(false);
    const [deleteProduct,setDeleteProduct] = useState('');
    // const [totAmount,setTotAmount] = useState(0);
   
    useEffect(()=>{
        if(localStorage.getItem('cart-items')){
            const _products = JSON.parse(localStorage.getItem('cart-items'));
            // setTotAmount(_products.price);
            console.log('in cart use')
            setCart(_products);
            
        }
    },[]);
    console.log(cart);

    const onChangeQuantity = (type,productName)=>{
        const temp = cart.map((cartProduct)=>{
            if(cartProduct.name===productName){
                if(type==='decrement'){
                    cartProduct.quantity -= 1;
                }
                else{
                    cartProduct.quantity += 1;
                }
                cartProduct.cartPrice = cartProduct.quantity*cartProduct.price;
                // setTotAmount(cartProduct.cartPrice);
                return cartProduct;
            }
            return cartProduct;
        })
        setCart(temp);
        localStorage.setItem('cart-items', JSON.stringify(temp));
    }

    const removeProduct = (pName)=>{
        setIsShowModal(true);
        setDeleteProduct(pName);
    }

    const confirmDelete = ()=>{
        const temp = cart.filter(value => value.name !== deleteProduct );
        setCart(temp);
        setIsShowModal(false);
        // console.log(temp);
        localStorage.setItem('cart-items', JSON.stringify(temp));

    }

    const Cancel = () => setIsShowModal(false);
return (
    <div className="container">
        <div className="row">
            <div className="col-sm">
                {cart.length > 0 ? (
                    <div>
                    <h2 className="text-center"> Cart </h2>
                    {cart.map((product,index)=>(
                        <div className="row my-4 py-4 border-bottom" key={product.name}> 
                            <div className="col-sm-3 px-5">
                                <img src={product.imgSrc} alt={product.name} className="img-fluid"></img>
                            </div>

                            <div className="col-sm-6">
                                <h4 className="text-primary" > {product.name} </h4>

                                <ul>
                                    {product.specifications.map((specification)=>(
                                        <li key={specification}>
                                            {specification}
                                        </li>
                                    ))}

                                </ul>

                            </div>

                            <div className="col-sm-3">
                                <h5>Price:    {product.price}</h5>
                                <h5>Quantity: <button className="btn btn-danger btn-sm" disabled={product.quantity===1} onClick={()=>onChangeQuantity('decrement',product.name)}> - </button> {product.quantity} <button className="btn btn-success btn-sm" onClick={()=>onChangeQuantity('increment',product.name)}> + </button></h5>
                                <h5>Total Amount: {product.price*product.quantity}   </h5>
                                <button className="btn btn-sm btn-danger" onClick={()=>removeProduct(product.name)}><i className="fa-solid fa-trash"></i></button>
                            </div>

                        </div>
                    ))}

                </div>
                ) :(
                    <div className="text-center py-4 my-4">
                        <img className="img-fluid text-center" alt="missing carts" width={'300px'}
                        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"></img>
                        <h4>Missing Cart items?</h4>
                        <p>Login to see the items you added previously</p>
                        <button className="btn btn-lg btn-warning">Login</button>
                     </div>   
                )}
                

            </div>

        </div>
        {
            isShowModal && <div className="modal" style={{ display: 'block', backgroundColor: 'rgb(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={Cancel}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure, you want to delete this product?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={Cancel}>Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={()=>confirmDelete()} >Delete</button>
                    </div>
                </div>
            </div>
        </div>
        }
        
    </div>
)
}
export default Cart;