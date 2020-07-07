import React, { useState } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import queryString from 'query-string'
import './t.css'
import P from '../p/p';

  export default class fetchrandomuser extends React.Component{
    

    state={
        loading:true,
        d: [], 
        dnew: [], 
       a:[],
       filter: '',
  
    };
    
    constructor(props) {
        super(props);   
    }

   async componentDidMount(){


    const url="https://deployment-cc-uc-1-smartlearner.container-crush-01-4044f3a4e314f4bcb433696c70d13be9-0000.che01.containers.appdomain.cloud/products";
    const response = await fetch(url);
    const data =await response.json();
       
    this.setState({d:data.data,loading:false})
       
    console.log(data);
    const value=queryString.parse(this.props.location.search);
    const id=value.id;
    console.log(id)
    this.setState({ filter: id}); 

    const urlnew="https://deployment-cc-uc-1-smartlearner.container-crush-01-4044f3a4e314f4bcb433696c70d13be9-0000.che01.containers.appdomain.cloud/hotels/" + id;
    const responsenew = await fetch(urlnew);
    const datanew =await responsenew.json();

    this.setState({dnew:datanew.data,loading:false})
    console.log(datanew);
      
       
    }
    showDetails(num) {
      window.open('t?id=' + num,'_blank');

   }

   showDetailsnew(num) {
    window.open('/t?id=' + num,'_blank');

 }
 showDetailss() {
  window.open('/Hotel','_self');

}
 
render(){  
   


    return (
        <div className="productContainer1">
             <div class="topnav">
             <a  href="/"><font color="black">Home</font></a>
                    <a class="active" href="/hotel"><font color="black">Hotel</font></a>
		    <a href="/Vplace"><font color="black">Visiting Place</font></a>
                    <a href="/contact"><font color="black">Contact</font></a>
                    <a  href="/team"><font color="black">Team Members</font></a>
        <div class="search-container">
        
           
        </div>
        </div>
        <section class="banner_part" >
 
       
            <div class="name">  
        <tbody class >  
        <div>
          
          <a href="/hotel" target="" class="button instagram" ><span class="gradient"></span><r class="t">Back</r></a>
      </div>

        <div class="text-center">
        {this.state.d.map(d => (
this.state.filter == ''|| d.slno.toString().match(d.slno).includes(this.state.filter)?
<div>
<center><h1 class="tt"><b>{d.hotel} Details</b></h1></center>
<div class="wrapper1">
    <div class="product-img">
    <img src={"img/Hotel/" + d.slno+".jpg"} height="600" width="500"/>
        </div>
    <div class="product-info">
      <div class="product-text">
	{d.rating==="4"?<img src="img/4.png" class="star8"/>:<div></div>}
                            {d.rating==="5"?<img src="img/51.png" class="star81"/>:<div></div>}
                            {d.rating==="3.5"?<img src="img/3-5.png" class="star81"/>:<div></div>}
                            {d.rating==="4.5"?<img src="img/4-5.png" class="star8"/>:<div></div>}
        <h1>{d.hotel}<img src="img/new.png" class="new" alt="" /></h1>
        
        
<h2>Place: {d.places}</h2>

        <p> <font color="#D31F9F" ><b>History:</b> </font> {d.description} </p>
        <p><font color="#D31F9F" ><b>Visting place:</b></font> {d.visitingplaces}</p>
      </div>
      
      <div class="product-price-btn">
      
     <p> Price: <k class="size21">₹{d.ppn}</k>/Room/Night</p><br/><br/>
   
       <div> {d.room_available !== 0 ?  <button type="button" class="trigger-btn" data-toggle="modal" href="#myModal">Book now</button>:
            <button type="button" class="trigger-btn" data-toggle="modal" href="#myModall" >Reserve for me</button>}</div>
 <div >{d.IN_STOCK === 'Yes' ?  <button type="button" class="trigger-btn" data-toggle="modal" onClick={evt => this.showDetails(d.ITEM_NUMBER)} >Add to cart</button>:
           <div></div>}</div>
          <h3>Rooms: {d.room_available} Available</h3>
      </div>
   
    </div>
  </div>

</div> : <div></div>





))}
  

</div>


<div id="myModal" class="modal fade">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="icon-box">
				<i class="material-icons">&#xE876;</i>
				</div>				
				<h4 >Awesome!</h4>	
			</div>
			<div class="modal-body">
				<p class="text-center">Your booking has been confirmed. Check your email for details.</p>
			</div>
			<div class="modal-footer">
				<button class="btn btn-success btn-block" data-dismiss="modal" onClick={evt => this.showDetailss()}>OK</button>
			</div>
		</div>
	</div>
</div> 
</tbody>
</div>

  <center><h1 class="tt"><b>Similar Hotels</b></h1></center>
                   
                   <div class="name">
        
                   <div class="grid-container" >
                
                           {this.state.dnew.map(dnew => (

                              /* this.state.filter == '' || dnew.DESCRIPTION.toLowerCase().includes(this.state.filter.toLowerCase()) || dnew.SKU_ATTRIBUTE_VALUE1.toLowerCase().includes(this.state.filter.toLowerCase()) || dnew.BRAND.toLowerCase().includes(this.state.filter.toLowerCase()) ?
                            */

                                   <div class="grid-item">

                                       <div class="flip-card1">
                                           <div class="flip-card-inner1">
                                               <div class="flip-card-front1">

                                                   <div> <b class="size"> {dnew.hotel}</b></div>
                                                   <img class="p13" onClick={evt => this.showDetails(dnew.slno)} src={"img/Hotel/" + dnew.slno+".jpg"} />
                            <br /><b class="size1">Place:</b> {dnew.places}<br /><b class="size1">Room Available:</b> {dnew.room_available} <br /><b class="size1">Price: </b><b class="size2"> ₹ {dnew.ppn}/Room</b><br />
				{dnew.rating==="4"?<img src="img/4.png" class="star9"/>:<div></div>}
                            {dnew.rating==="5"?<img src="img/51.png" class="star91"/>:<div></div>}
                            {dnew.rating==="3.5"?<img src="img/3-5.png" class="star91"/>:<div></div>}
                            {dnew.rating==="4.5"?<img src="img/4-5.png" class="star9"/>:<div></div>}

                                                   {dnew.room_available !== 0 ? <img src="img/new.png" class="new" alt="" />:<img src="img/ofs.png" class="new" alt="" />}
                                               </div>

                                               
                                           </div>

                                       </div>






                                    {dnew.room_available !== 0 ? <button onClick={evt => this.showDetails(dnew.slno)} class="button instagram" ><span class="gradient"></span><r >Book</r></button> :
                                            <button type="button" class="button instagram" data-toggle="modal" href="#myModall"><span class="gradient"></span><r >Reserve for me</r></button>

                                       }


                                   </div> /*: <div></div> */

                                  
                           ))}
<div id="myModall" class="modal fade">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="icon-box">
				<i class="material-icons">&#xE876;</i>
				</div>				
				<h4 >Reserved!</h4>	
			</div>
			<div class="modal-body">
				<p class="text-center">You will be notified when Room will be available</p>
			</div>
			<div class="modal-footer">
				<button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
			</div>
		</div>
	</div>
</div> 

</div>

                   </div>

               </section>

               <center><small>Designed by <a href="#" target="_blank"><font color="teal">Smart Learner  </font></a></small></center>

           </div>
  


    ) ;
  
   
}



}
