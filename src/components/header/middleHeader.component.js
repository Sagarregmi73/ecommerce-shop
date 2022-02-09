import React from 'react';
import {Link,useParams} from 'react-router-dom';
const middleHeader = () => {
	const {id}=useParams();
  return <div className="header-middle">
			<div className="container">
				<div className="row">
					<div className="col-md-4 clearfix">
						<div className="logo pull-left">
							<Link to=""><img src="images/home/logo.png" alt="" /></Link>
						</div>
						<div className="btn-group pull-right clearfix">
							<div className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									USA
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li><Link to="">Canada</Link></li>
									<li><Link to="">UK</Link></li>
								</ul>
							</div>
							
							<div className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									DOLLAR
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li><Link to="">Canadian Dollar</Link></li>
									<li><Link to="">Pound</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-8 clearfix">
						<div className="shop-menu clearfix pull-right">
							<ul className="nav navbar-nav">
								<li><Link to=""><i className="fa fa-user"></i> Account</Link></li>
								<li><Link to=""><i className="fa fa-star"></i> Wishlist</Link></li>
								<li><Link to=""><i className="fa fa-crosshairs"></i> Checkout</Link></li>
								<li><Link to={`/cart/${id}`}><i className="fa fa-shopping-cart"></i> Cart</Link></li>
								<li><Link to=""><i className="fa fa-lock"></i> Login</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
  </div>;
};

export default middleHeader;
