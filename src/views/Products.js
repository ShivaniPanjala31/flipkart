
import { useState, useEffect, useRef } from "react";
import { Link,useNavigate } from "react-router-dom";

function Products(){

    const [products, setProducts] = useState(
        [
            {
                name: 'vivo T2x 5G (Marine Blue, 128 GB)',
                imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70',
                price: 12999,
                isCart: false,
                specifications: [
                    '6 GB RAM | 128 GB ROM',
                    '16.71 cm (6.58 inch) Full HD+ Display',
                    '50MP + 2MP | 8MP Front Camera',
                    '5000 mAh Battery',
                    'Dimensity 6020 Processor',
                    '1 Year of Device & 6 Months for Inbox Accessories'
                ],
                thumbnailImages: [
                    'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70'
                ]
            },
            {
                name: 'APPLE iPhone 14 (Blue, 128 GB)',
                imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
                price: 58999,
                isCart: false,
                specifications: [
                    '6 GB RAM | 128 GB ROM',
                    '16.71 cm (6.58 inch) Full HD+ Display',
                    '50MP + 2MP | 8MP Front Camera',
                    '5000 mAh Battery',
                    'Dimensity 6020 Processor',
                    '1 Year of Device & 6 Months for Inbox Accessories'
                ],
                thumbnailImages: [
                    'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70'
                ]
            },
            {
                name: 'OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)',
                imgSrc: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70',
                price: 17159,
                isCart: false,
                specifications: [
                    '6 GB RAM | 128 GB ROM',
                    '16.71 cm (6.58 inch) Full HD+ Display',
                    '50MP + 2MP | 8MP Front Camera',
                    '5000 mAh Battery',
                    'Dimensity 6020 Processor',
                    '1 Year of Device & 6 Months for Inbox Accessories'
                ],
                thumbnailImages: [
                    'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70',
                    'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
                    'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/c/f/-original-imagg2abpjwyyvqg.jpeg?q=70',
                    'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70'
                ]
            },
            {
                name: 'SAMSUNG Galaxy F14 5G (OMG Black, 128 GB)',
                imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70',
                price: 12490,
                isCart: false,
                specifications: [
                    '6 GB RAM | 128 GB ROM',
                    '16.71 cm (6.58 inch) Full HD+ Display',
                    '50MP + 2MP | 8MP Front Camera',
                    '5000 mAh Battery',
                    'Dimensity 6020 Processor',
                    '1 Year of Device & 6 Months for Inbox Accessories'
                ],
                thumbnailImages: [
                    'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70',
                    'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/b/t/-original-imagtywahysgub6f.jpeg?q=70',
                    'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/6/3/-original-imagtyxbqmzcyjcz.jpeg?q=70',
                    'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/f/a/-original-imagtyxbz7krqgn4.jpeg?q=70'
                ]
            }
        ]
    );

    
    const searchInput = useRef();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts,setFilteredProducts] = useState([]);
    let timer;
    let cart = [];

    // if(localStorage.getItem('cart-items')){
    //     cart = JSON.parse(localStorage.getItem('cart-items'));
    //     products.forEach(product=>{
    //         cart.forEach(cartProduct=>{
    //             if(product.name===cartProduct.name){
    //                 product.isCart=true;
    //             }
    //         })
    //     })
    // }

    useEffect(() => {
        setFilteredProducts(products);
        if (localStorage.getItem('cart-items')) {
            cart = JSON.parse(localStorage.getItem('cart-items'));
            const temp = products.map(product => {
                const isExist = cart.find(cProduct => product.name === cProduct.name);
                if (isExist) {
                    product.isCart = true;
                    return product;
                }
                return product;
            });
            setProducts(temp);
        }
    }, []);

    const addToCart = (index)=> {

        if (localStorage.getItem('cart-items')) {
            cart = JSON.parse(localStorage.getItem('cart-items'));
        }

        console.log('add to cart..',index);
        // console.log(localStorage.getItem('cart-items'));
        products[index].isCart=true;
        cart =  [...cart, {...products[index],quantity:1,cartPrice:products[index].price}]
        // cart.push(products[index]);
        // console.log(products[index]);
        localStorage.setItem('cart-items',JSON.stringify(cart));
        navigate('/cart');
    }

    const navigate = useNavigate();
    const GoToCart = ()=>navigate('/cart');

   useEffect(() => {
     searchInput.current.focus();
     //const searchValue = searchInput.current.value ;

     timer = setTimeout(() => {
       const _searchProducts = products.filter((product) =>
         product.name.toLowerCase().includes(searchQuery.toLowerCase())
       );
       setFilteredProducts(_searchProducts);
     }, 1000);

     return () => {
        clearTimeout(timer);
    };
    
   }, [searchQuery,products]);

    
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto ">
                    <div className="pt-4 mb-2">
                    <input type="text" className="form-control" ref={searchInput} onChange={(event)=>{setSearchQuery(event.target.value)}} placeholder="search products here..."></input>
                    </div>
                    
                </div>

            </div>
            <div className="row">
                <div className="col-sm">
                    {filteredProducts.map((product,index)=>(
                        <div className="row my-4 py-4 border-bottom" key={product.name}> 
                            <div className="col-sm-3 px-5">
                                <img src={product.imgSrc} alt={product.name} className="img-fluid"></img>
                            </div>

                            <div className="col-sm-6">
                                <h4 className="text-primary" > <Link style={{textDecoration:'none'}} to={`/product-details/${product.name}`}>{product.name} </Link> </h4>

                                <ul>
                                    {product.specifications.map((specification)=>(
                                        <li key={specification}>
                                            {specification}
                                        </li>
                                    ))}

                                </ul>

                            </div>

                            <div className="col-sm-3">
                                <h4>{product.price}</h4>

                                {product.isCart ?  (<button className="btn btn-success" onClick={GoToCart}>Go to Cart</button>):
                                <button className="btn btn-primary" onClick={()=>addToCart(index)}>Add to Cart</button>}
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Products;