import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link,useParams} from 'react-router-dom';

const index = () => {
    const {id}=useParams();
	const dispatch=useDispatch();
    const cart=useSelector(state=>state.cartItemReducer);
	
	const addition=(accumulator,currentValue)=>{
		return accumulator + currentValue.price * currentValue.quantity;
	}
	const total=cart.reduce(addition,0);
	
	
  return <div>
      	<section id="cart_items">
		<div className="container">
			<div className="breadcrumbs">
				<ol className="breadcrumb">
				  <li><a href="#">Home</a></li>
				  <li className="active">Shopping Cart</li>
				</ol>
			</div>
			<div className="table-responsive cart_info">
				<table className="table table-condensed">
					<thead>
						<tr className="cart_menu">
							<td className="image">Item</td>
							<td className="description"></td>
							<td className="price">Price</td>
							<td className="quantity">Quantity</td>
							<td className="total">Total</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
					
{
	cart.map(item=>{
		return(
			
<tr key={item.id}>
							<td class="cart_product">
								<Link to=""><img style={{width:"50px",height:"50px",borderRadius:"15px"}} src={item.img} alt="" /></Link>
							</td>
							<td class="cart_description">
								<h4><a href="">{item.name}</a></h4>
								<p>Web ID:{item.id} </p>
							</td>
							<td class="cart_price">
								<p>${item.price}</p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									<Link to="" class="cart_quantity_up" onClick={()=>dispatch({type:"INCREASE",payload:item})} > + </Link>
									<input class="cart_quantity_input" type="text" name="quantity" value={item.quantity} autocomplete="off" size="2" />
									<Link to="" class="cart_quantity_down" onClick={()=>dispatch({type:"DECREASE",payload:item})} > - </Link>
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">${item.price * item.quantity}</p>
							</td>
							<td class="cart_delete">
								<Link to="" class="cart_quantity_delete" onClick={()=>dispatch({type:"CART_REMOVE",payload:item})}><i class="fa fa-times"></i></Link>
							</td>
					</tr>
			

		);
	})
}
                
                             
                        
						
					</tbody>
				</table>
			</div>
		</div>
	</section> 

	<section id="do_action">
		<div className="container">
			<div className="heading">
				<h3>What would you like to do next?</h3>
				<p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<div className="chose_area">
						<ul className="user_option">
							<li>
								<input type="checkbox" />
								<label>Use Coupon Code</label>
							</li>
							<li>
								<input type="checkbox" />
								<label>Use Gift Voucher</label>
							</li>
							<li>
								<input type="checkbox" />
								<label>Estimate Shipping & Taxes</label>
							</li>
						</ul>
						<ul className="user_info">
							<li className="single_field">
								<label>Country:</label>
								<select>
									<option>United States</option>
									<option>Bangladesh</option>
									<option>UK</option>
									<option>India</option>
									<option>Pakistan</option>
									<option>Ucrane</option>
									<option>Canada</option>
									<option>Dubai</option>
								</select>
								
							</li>
							<li className="single_field">
								<label>Region / State:</label>
								<select>
									<option>Select</option>
									<option>Dhaka</option>
									<option>London</option>
									<option>Dillih</option>
									<option>Lahore</option>
									<option>Alaska</option>
									<option>Canada</option>
									<option>Dubai</option>
								</select>
							
							</li>
							<li className="single_field zip-field">
								<label>Zip Code:</label>
								<input type="text" />
							</li>
						</ul>
						<Link className="btn btn-default update" to="">Get Quotes</Link>
						<Link className="btn btn-default check_out" to="">Continue</Link>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="total_area">
						<ul>
							<li>Cart Sub Total <span>${total}</span></li>
							<li>Eco Tax <span>$2</span></li>
							<li>Shipping Cost <span>Free</span></li>
							<li>Total <span>${total+2}</span></li>
						</ul>
							<Link className="btn btn-default update" to="">Update</Link>
							<Link className="btn btn-default check_out" to="">Check Out</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
  </div>;
};

export default index;
