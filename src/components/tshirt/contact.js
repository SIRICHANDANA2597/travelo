import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import './contact.css'


class tshirt extends React.Component {
  render(){
  return (


    <div>

        
  

  
        <div class="topnav">
                    <a href="/"><font color="black">Home</font></a>
                    <a href="/Hotel"><font color="black">Hotel</font></a>
		    <a href="/Vplace"><font color="black">Visiting Place</font></a>
                    <a  class="active" href="/contact"><font color="black">Contact</font></a>
                    <a  href="/team"><font color="black">Team Members</font></a>
                </div>




                <div class="container-contact100">
		<div class="contact100-map"></div>

		<div class="wrap-contact100">
			<div class="contact100-form-title">
				<span class="contact100-form-title-1">
					Contact Us
				</span>

				<span class="contact100-form-title-2">
					Feel free to drop us a line below!
				</span>
			</div>

			<form class="contact100-form validate-form">
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<span class="label-input100">Full Name:</span>
					<input class="input100" type="text" name="name" placeholder="Enter full name" required/>
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<span class="label-input100">Email:</span>
					<input class="input100" type="email" name="email" placeholder="Enter email addess" required/>
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate="Phone is required">
					<span class="label-input100">Phone:</span>
					<input class="input100" type="number" name="phone" placeholder="Enter phone number" required/>
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate = "Message is required">
					<span class="label-input100">Message:</span>
					<textarea class="input100" name="message" placeholder="Your Comment..." required></textarea>
					<span class="focus-input100"></span>
				</div>

				<div class="container-contact100-form-btn">
					<button class="contact100-form-btn"  href="#myModal">
						<span>
							Submit
							<i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>


    

<footer class="footer_part">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-sm-6 col-lg-2">
                    
                </div>
                <div class="col-sm-6 col-lg-2">
                    <div class="single_footer_part">
                        <h4>Company</h4>
                        <ul class="list-unstyled">
                            <li><a href="/tshirt">About</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="/tshirt">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="single_footer_part">
                        <h4>Address</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">DLF 2, IBM, kolkata</a></li>
                            <li><a href="#">+91 3346772112</a></li>
                            <li><font color="white">smartlearner@in.ibm.com</font></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="single_footer_part">
                        <h4>Newsletter</h4>
                        <div id="mc_embed_signup">
                         
                        </div>
                        <div class="social_icon">
                            <a href="#"><i class="ti-facebook"></i></a>
                            <a href="#"><i class="ti-twitter-alt"></i></a>
                            <a href="#"><i class="ti-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class>
                        
Copyright &copy; All rights reserved | IBM INDIA <i class="ti-heart" aria-hidden="true"></i> by <a href="#" target="_blank">Smart-Learner</a>

                    </div>
                </div>
            </div>
        </div>
    </footer>



















</div>









/*
<div className="App">
      <header className="App-header">



      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img class="p12"src="logo.jpg" />
    </div>
    <div class="flip-card-back">
      <h1>Anamika</h1> 
      <p>anamika_chatterjee@in.ibm.com</p> 
      <p>Coach</p>
    </div>
  </div>
</div>

      <p className="paragraph">
         Smart Learner
        </p>

        <p1><b><font color="red">kool web Store</font></b></p1>
        <p><a rel="Anamika Chatterjee" href="https://w3.ibm.com/bluepages/profile.html?uid=121822744" target="_blank"><font color="Black">Anamika Chatterjee(anamika_chatterjee@in.ibm.com) Team Coach</font></a></p>

        <p><a rel="Sayantan Roy" href="https://w3.ibm.com/bluepages/profile.html?uid=00902V744" target="_blank"><font color="Black">Sayantan Roy(sayroy1@in.ibm.com) Team Captain</font></a></p>
        <div className="teammembers">
          <table id="customers">
            <tbody>
                <tr>
                    <td><a rel="Amit Singh" href="https://w3.ibm.com/bluepages/profile.html?uid=000GRQ744" target="_blank">Amit Singh(amits121@in.ibm.com)</a></td>
                    <td><a rel="Hara Jena" href="https://w3.ibm.com/bluepages/profile.html?uid=09574J744" target="_blank">Hara Jena(harajena@in.ibm.com)</a></td>
                </tr>
                <tr>
                    <td><a rel="Siri chandana" href="https://w3.ibm.com/bluepages/profile.html?uid=0004O8744" target="_blank">Siri Chandana(snandan1@in.ibm.com)</a></td>
                    <td><a rel="Abhipsa" href="https://w3.ibm.com/bluepages/profile.html?uid=0644F8744" target="_blank">Abhipsa(abhipc94@in.ibm.com)</a></td>
                </tr>
            </tbody>
          </table>
        </div>
        <a href="/" class="btn_1">Home Page</a>
       
       <p class="pull-left">
						<small >&copy; All Rights Reserved.  </small> 
						<small>Designed by <a href="#" target="_blank"><font color="teal">IBM india</font></a></small>
					</p>
      </header>
    </div>
     */
  );
}
}
export default tshirt;



















