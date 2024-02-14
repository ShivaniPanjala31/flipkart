function Home(){
    return (
        <div>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
               
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_copy_31_1759x.jpg?v=1702884211" className="d-block w-100" alt="img1" />
                    </div>
                    <div className="carousel-item ">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_934b2528-81af-4e20-9296-87a1771cead1_1759x.jpg?v=1702704893" className="d-block w-100" alt="img2" />
                    </div>
                    <div className="carousel-item ">
                        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_4_48_1759x.jpg?v=1702454886" className="d-block w-100" alt="img3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <video src='https://youtu.be/w7HLqwdE4P4' type="video/mp4" controls width="320" height="240">
                            <source />
                        </video> */}

                        {/* <iframe width="407" height="447" src="https://www.youtube.com/embed/w7HLqwdE4P4" title="Samsung F14 Intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center m-5"> <span style={{color:"black"}}>Fire-Boltt | </span>Ignite the fire in you
                            <hr style={{width:'115px',height:'1.5px',fontSize:'38px',marginBottom:'50px',margin:'auto'}}></hr>
                        </h1>
                        <div className="row">
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <img src="https://www.fireboltt.com/cdn/shop/files/growth.gif?v=6149664055454190024" className="img-fluid" alt="img7" />
                                    </div>
                                    <div className="col-sm">
                                        <h6>1300% YOY</h6>
                                        <h6>400% QOQ</h6>
                                        <h6>Growth</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <img src="https://www.fireboltt.com/cdn/shop/files/growth.gif?v=6149664055454190024" className="img-fluid" alt="img6"/>
                                    </div>
                                    <div className="col-sm">
                                        <h6>1300% YOY</h6>
                                        <h6>400% QOQ</h6>
                                        <h6>Growth</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <img src="https://www.fireboltt.com/cdn/shop/files/stopwatch.gif.gif?37994" className="img-fluid" alt="img4"/>
                                    </div>
                                    <div className="col-sm">
                                        <h6>1 Unit Sold</h6>
                                        <h6>Every 05 Sec</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <img src="https://www.fireboltt.com/cdn/shop/files/review.gif?v=6281934118567879272" className="img-fluid" alt="img5" />
                                    </div>
                                    <div className="col-sm">
                                        <h6>2Mn+ Product</h6>
                                        <h6>Reviews</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )

}

export default Home;