import React, { useState } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import queryString from 'query-string'
import './cart.css'

export default class fetchrandomuser extends React.Component{


    state={
        loading:true,
        d: [],  
       a:[],
       filter: [],
  
    };

    async componentDidMount(){
   
        const url="https://smartbuyms-smart-learner.gamification-d3c0cb24e2b77f6869027abe3de4bca3-0001.sng01.containers.appdomain.cloud/products";
        const response = await fetch(url);
        const data =await response.json();
       
        this.setState({d:data.data,loading:false})
       
        console.log(data);
        const value=queryString.parse(this.props.location.search);
const id=value.id;
console.log(id)
this.setState({ filter: id });



       
    }
    showDetails() {
        window.open('/p','_self');
 
     }
    render(){  
   


        return (
            <div className="productContainer1">
                 <div class="topnav">
            <a  href="/"><font color="black">Home</font></a>
            <a href="/p"><font color="black">Product</font></a>
            <a href="/contact"><font color="black">Contact</font></a>
            <a href="/team"><font color="black">Team Members</font></a>
            <a class="active" href="#"><font color="black">Cart</font></a>
           


            <div class="search-container">
            
               
            </div>
            </div>
            <section class="banner_part" >
               <center><h1 class="tt"><b>Product Page Of Smart Learner kool App</b></h1></center>
                <div class="name">  
            <tbody class >  
          
            <div>

    
    </div>

    {this.state.d.map(d => (

this.state.filter == ''|| d.ITEM_NUMBER.includes(this.state.filter)?
<div>
<div class="wrapper12">
<div class="product-img1">
      <img src={"http://django-ex-smart-learner.gamification-d3c0cb24e2b77f6869027abe3de4bca3-0001.sng01.containers.appdomain.cloud/get-image-for-item-id/" + d.ITEM_NUMBER} height="200" width="200"/>
      
    </div>
    <div class="product-info1">
      <div class="product-text1">
        <h1>{d.DESCRIPTION}<img src="img/new.png" class="new" alt="" /></h1>
        <h2>Size: {d.SKU_ATTRIBUTE_VALUE1}</h2>
        <p>Price: <k class="size212">{d.LIST_PRICE}$</k></p>


      </div>
      
      <div class="product-price-btn1">
      <p>Total: {d.LIST_PRICE}$</p>
   
       
<button type="button" class="trigger-btn" data-toggle="modal" href="#myModal">buy now</button>
        
      </div>
   
    </div>



</div>

    </div>:<div>{d.ITEM_NUMBER==1001?<div><br/><center><b class ="size">No Product in the cart :(</b></center></div>:<div></div>}</div>
))}



<div id="myModal" class="modal fade">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="icon-box">
				<i class="material-icons">&#xE876;</i>
				</div>				
				<h4 >Congratulations!</h4>	
			</div>
			<div class="modal-body">
				<p class="text-center">Your booking has been confirmed. Check your email for details.</p>
			</div>
			<div class="modal-footer">
				<button class="btn btn-success btn-block" data-dismiss="modal"  onClick={evt => this.showDetails()}>OK</button>
			</div>
		</div>
	</div>
</div> 

  
    </tbody></div></section></div>



        )}}