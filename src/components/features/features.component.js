import React from 'react';
import {Link,useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {getUsersFetch,cartItem} from '../../redux/action'
const features = () => {
	
	const dispatch = useDispatch();
  const users = useSelector(state=>state.cartReducer.users);

  return <div className="col-sm-9 padding-right">
	  <div className="features_items">
	  <button className="btn btn-default add-to-cart" onClick={()=>dispatch(getUsersFetch())}>Click here for Latest features</button>
	  <h2 className="title text-center">Features Items</h2>
		  {
			  users.map(user=>{
				  user.quantity=1;
				  return(
<div key={user.id} className="col-sm-4">
							<div className="product-image-wrapper">
								<div className="single-products">
										<div className="productinfo text-center">
											<img src={user.img} alt="" />
											<h2>${user.price}</h2>
											<p>{user.name}</p>
											<Link to="" onClick={()=>dispatch({type:"ADD_CART_ITEM" , payload:user})} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
											<Link to={`/details/${user.id}`} className="btn btn-default add-to-cart" >view detail</Link>
										
										</div>
										<div className="product-overlay">
											<div className="overlay-content">
												<h2>${user.price}</h2>
												<p>{user.name}</p>
												<Link to="" onClick={()=>dispatch({type:"ADD_CART_ITEM" , payload:user})} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
												<Link to={`/details/${user.id}`} className="btn btn-default add-to-cart">view detail</Link>
										
											</div>
										</div>
								</div>
								<div className="choose">
									<ul className="nav nav-pills nav-justified">
										<li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
										<li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
									</ul>
								</div>
							</div>
						</div>
				  )
			  }
						
							
						
					
			  )
		  }
		  </div>
					
					
					<div className="category-tab">
						<div className="col-sm-12">
							<ul className="nav nav-tabs">
								<li className="active"><a href="#tshirt" data-toggle="tab">T-Shirt</a></li>
								<li><a href="#blazers" data-toggle="tab">Blazers</a></li>
								<li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
								<li><a href="#kids" data-toggle="tab">Kids</a></li>
								<li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
							</ul>
						</div>
						<div className="tab-content">
							<div className="tab-pane fade active in" id="tshirt" >
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery1.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery2.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery3.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery4.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
							</div>
							
							<div className="tab-pane fade" id="blazers" >
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery4.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery3.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery2.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery1.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
							</div>
							
							<div className="tab-pane fade" id="sunglass" >
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery3.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery4.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery1.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery2.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
							</div>
							
							<div className="tab-pane fade" id="kids" >
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery1.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery2.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery3.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery4.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
							</div>
							
							<div className="tab-pane fade" id="poloshirt" >
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery2.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery4.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery3.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery1.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="recommended_items">
						<h2 className="title text-center">recommended items</h2>
						
						<div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="item active">	
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend1.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
												
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend2.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
												
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend3.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
												
											</div>
										</div>
									</div>
								</div>
								<div className="item">	
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend1.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
												
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend2.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
												
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend3.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
												
											</div>
										</div>
									</div>
								</div>
							</div>
							 <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
								<i className="fa fa-angle-left"></i>
							  </a>
							  <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
								<i className="fa fa-angle-right"></i>
							  </a>			
						</div>
					</div>
					
				</div>
			
 
};

export default features;
