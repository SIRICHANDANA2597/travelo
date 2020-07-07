import React, { component } from 'react';

import { Table, Button, Alert } from 'react-bootstrap';
import './hotel.css';
import Pagination from '../pagination/pagination';
import { browserHistory } from "react-router";





const BrowserSpeechRecognition =
    typeof window !== 'undefined' &&
    (window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition)
const recognition = BrowserSpeechRecognition
    ? new BrowserSpeechRecognition()
    : null

const browserSupportsSpeechRecognition = recognition !== null

export default class fetchrandomuser extends React.Component {

    if(browserSupportsSpeechRecognition) {
        recognition.continous = true
        recognition.interimResults = true
        recognition.lang = 'en-US'
    }
    state = {
        loading: true,
        d: [],
        a: [],
        filter: '',
        listening: false
    };

    constructor(props) {
        super(props);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.toggleListen = this.toggleListen.bind(this);
        this.handleListen = this.handleListen.bind(this);
    }

    toggleListen() {
        this.setState({
            listening: !this.state.listening
        }, this.handleListen)
    }

    handleListen() {
        if (this.state.listening) {
            recognition.start()
            let finalTranscript = ''
            recognition.onresult = event => {
                let interimTranscript = ''

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) finalTranscript += transcript + ' ';
                    else interimTranscript += transcript;
                }
                console.log(finalTranscript);
                this.setState({
                    filter: finalTranscript
                })
            };
            recognition.onend = () => {
                this.toggleListen();
            }
        }
    }

    async componentDidMount() {

        const url = "https://deployment-cc-uc-1-smartlearner.container-crush-01-4044f3a4e314f4bcb433696c70d13be9-0000.che01.containers.appdomain.cloud/products";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({ d: data.data, loading: false })
        console.log(data);
    }
    
    updateInputValue(evt) {
        this.setState({ filter: evt.target.value });
    }

    showDetails(num) {
        window.open('/t?id=' + num, '_blank');

    }
 
    render() {

        if (this.state.loading) {
            return <div>loading...</div>;
        }

       
        return (

            
            <div className="productContainer1">
                <div class="topnav">
                    <a href="/"><font color="black">Home</font></a>
                    <a class="active" href="/Hotel"><font color="black">Hotel</font></a>
		    <a href="/Vplace"><font color="black">Visiting Place</font></a>
                    <a href="/contact"><font color="black">Contact</font></a>
                    <a href="/team"><font color="black">Team Members</font></a>
			
                    <div class="search-container">

                        <input type="text" size="70" name="srchtxt" placeholder="Search your Item here" onChange={evt => this.updateInputValue(evt)} />
                        {this.state.listening ? <div></div> : <img onClick={this.toggleListen} src="mic.png" />}
                    </div>
                </div>
                <section class="banner_part" >
                    <center><h1 class="tt"><b>Welcome to TravelO-Hotels</b></h1></center>
                    

         







                    <div class="name">

                        <div class="grid-container" >

                            {this.state.d.map(d => (

                                this.state.filter == '' || d.hotel.toLowerCase().includes(this.state.filter.toLowerCase())|| d.places.toLowerCase().includes(this.state.filter.toLowerCase()) ?

                                    <div class="grid-item">

                                        <div class="flip-card1">
                                            <div class="flip-card-inner1">
                                                <div class="flip-card-front1">

                                                    <div> <b class="size"> {d.hotel}</b></div>
                                                   
                                                    <img class="p13" onClick={evt => this.showDetails(d.slno)} src={"img/Hotel/" + d.slno+".jpg"} />
                            <br /><b class="size1">Place:</b> {d.places}<br /><b class="size1">Room Available:</b> {d.room_available} <br /><b class="size1">Price: </b><b class="size2"> ₹ {d.ppn}/Room</b><br />
						{d.rating==="4"?<img src="img/4.png" class="star9"/>:<div></div>}
                            {d.rating==="5"?<img src="img/51.png" class="star91"/>:<div></div>}
                            {d.rating==="3.5"?<img src="img/3-5.png" class="star91"/>:<div></div>}
                            {d.rating==="4.5"?<img src="img/4-5.png" class="star9"/>:<div></div>}

                                                     {<img src="img/new.png" class="new" alt="" />}
                                                </div>
                                            </div>

                                        </div>
                                        {d.room_available !== 0 ? <button onClick={evt => this.showDetails(d.slno)} class="button instagram" ><span class="gradient"></span><r >Book</r></button> :
                                            <button type="button" class="button instagram" data-toggle="modal" href="#myModal"><span class="gradient"></span><r >Reserve for me</r></button>

                                        }


                                    </div> : <div></div>


                            ))}

<div id="myModal" class="modal fade">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="icon-box">
				<i class="material-icons">&#xE876;</i>
				</div>				
				<h4 >Reserved!</h4>	
			</div>
			<div class="modal-body">
				<p class="text-center">You will be notified when Rooms will be available</p>
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

        );


    }

    }



//export default p;