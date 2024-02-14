import React from "react";
import './home.css'
const Home = () => {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide slider" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={require('./images/product carosul/Soroliv.jpeg')} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('./images/product carosul/Amala Churna.jpeg')} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('./images/product carosul/Tulsi powder.jpeg')} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('./images/product carosul/Bilva churna.jpeg')} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('./images/product carosul/Chaywanprash.jpeg')} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('./images/product carosul/Herbal Insence Sticks.jpeg')} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('./images/product carosul/Monex Cough Syrup.jpeg')} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('./images/product carosul/Sharpokit.jpeg')} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('./images/product carosul/Til Oil.jpeg')} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container p-0">
                <div className="row d-flex justify-content-start">
                    <div className="col-md-10 shadow-lg p-3 mb-5 mt-3 rounded backcol">
                        <h3 className="text-center">Our Products</h3>
                        <p className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Our father of the nation Mahatma Gandhi ji introduced khadi gramodyog products in 1920 as a political weapon and as the best instrument for giving concrete expression to the Swadeshi Spirit to boycott foreign goods. Khadi gramodyog products rendered an opportunity to every man, woman and child to cultivate self-discipline and self-sacrifice as a part of the non-cooperation movement.
                            The Herbal Medicines of our company are well-prepared under the strict supervision of our expert & finest Vaidyas , thus maintaining the quality...we never compromise with quality ;as it is associated with our customer's trust...that's why we are one the emerging preparers of Herbal health-care products.
                            The village industrial products(GRAMODYOG Products)are purely hand-prepared by the women of rural areas,which are collected and preserved by the inhabitants of forest areas.</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="col-md-10 shadow-lg p-3 mb-5 mt-3 rounded faccol">
                        <h3 className="text-center">Our Factory</h3>
                        <p className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, delectus quaerat nisi tempora, reiciendis accusamus repudiandae ipsum corrupti voluptatem minus voluptate! Soluta officia ipsa laudantium nihil suscipit molestiae blanditiis facilis!
                            Voluptatibus nesciunt quo eveniet itaque similique nihil nobis optio iure tempora consequatur at quos numquam perferendis quia minus exercitationem sunt, aliquid distinctio molestias magni sed repudiandae. Quae culpa est rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil omnis quo minima fugiat error ex dolore commodi temporibus autem debitis, nisi sit reprehenderit magnam, optio in similique tempora voluptatem excepturi? </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-start">
                    <div className="col-md-10 shadow-lg p-3 mb-5 mt-3 rounded workcol">
                        <h3 className="text-center">Our Works</h3>
                        <p className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, delectus quaerat nisi tempora, reiciendis accusamus repudiandae ipsum corrupti voluptatem minus voluptate! Soluta officia ipsa laudantium nihil suscipit molestiae blanditiis facilis!
                            Voluptatibus nesciunt quo eveniet itaque similique nihil nobis optio iure tempora consequatur at quos numquam perferendis quia minus exercitationem sunt, aliquid distinctio molestias magni sed repudiandae. Quae culpa est rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil omnis quo minima fugiat error ex dolore commodi temporibus autem debitis, nisi sit reprehenderit magnam, optio in similique tempora voluptatem excepturi? </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="col-md-10 shadow-lg p-3 mb-5 mt-3 rounded achkcol">
                        <h3 className="text-center">Our Achivements</h3>
                        <p className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">We are working in this Industry for a very long period of time , and in these time we have made some of the products very Effective and they have a grest response in the market towards the disease . Some Products like Soroliv ,Sharpokit , Chaywanprash etc have done commedenable job in the market as well as for the patients . We have two more sectors in which we are having some Products which have left a great impact on the market like sikra and Insence Sticks.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;