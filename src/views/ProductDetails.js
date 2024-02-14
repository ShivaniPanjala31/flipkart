import {useParams} from 'react-router-dom';
import {useState} from 'react';
 
function ProductDetails(){

    const products = [
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
            thumbnailImages : [
                {
                    type : 'image',
                    source: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70'
                }
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
                {
                    type : 'image',
                    source:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70'

                }
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
                {
                    type : 'image',
                    source :'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70'

                },
                {
                    type:'image',
                    source:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70'
                },
                {
                    type:'image',
                    source:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/c/f/-original-imagg2abpjwyyvqg.jpeg?q=70'
                },
                {
                    type:'image',        
                    source:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70'
                }
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
                {
                    type : 'image',
                    source :'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70'

                },
                {
                    type : 'video',
                    source: 'https://www.youtube.com/embed/w7HLqwdE4P4'

                },
                {
                    type:'image',
                    source: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/b/t/-original-imagtywahysgub6f.jpeg?q=70'
                },
                {
                    type:'image',
                    source: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/6/3/-original-imagtyxbqmzcyjcz.jpeg?q=70'
                },
                {
                    type:'image',        
                    source:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/f/a/-original-imagtyxbz7krqgn4.jpeg?q=70'
                }
            ]
        }
    ];

    const params = useParams();


    const selectedProduct = products.find(product => product.name === params.productName);
    const [selectedImage,setSelectedImage] = useState(selectedProduct.thumbnailImages[0].source);
   
    // var fimg = true ;
    let updatedImage = (imageSrc, type)=>{
        
        
        if(type==='image'){
            // fimg =false;
            setSelectedImage(imageSrc);
            // console.log(fimg);
        }
        if(type==='video'){
            
            
            console.log(imageSrc);
            setSelectedImage(imageSrc);
        }
        
    }

    return(
        <div className="container my-5">
            <div className="row">
            <div className="col-sm-2">
                    {selectedProduct.thumbnailImages.map((thumbnailImage)=>(
                        <div className='border p-2 m-2' style={{width:'57%', cursor:'pointer'} } key={thumbnailImage.source}>
                            {thumbnailImage.type==='video'?
                           
                            (
                            <video src={thumbnailImage.source} onClick={()=>updatedImage(thumbnailImage.source,'video')}>
                                <source ></source>
                            </video>
                            ) :
                            (
                                <img src={thumbnailImage.source} alt={selectedProduct.name} height="100px" width="98%" onClick={()=>updatedImage(thumbnailImage.source,'image')}></img>)
                    }
                    </div>     

                    ))
                    }
                </div>
                {/* <div className="col-sm-4">
                    <img src={selectedImage} alt='img' className='img-fluid'></img>
                </div> */}

                <div className="col-sm-4">
                    
                        <img src={selectedImage} alt='img' className='img-fluid'></img>
                    
                    
                </div>

                <div className="col-sm-6">
                    <h4>{selectedProduct.name}</h4>
                    <h4>{selectedProduct.price}</h4>

                    <ul>
                    {selectedProduct.specifications.map((specification)=>(
                                        <li key={specification}>
                                            {specification}
                                        </li>
                                    ))}

                    </ul>

                    <button className="btn btn-primary">Add to Cart</button>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails;