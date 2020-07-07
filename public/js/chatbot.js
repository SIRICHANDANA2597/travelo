// Backend URL.
// Variable for the conversation state.
var context = "";

$(function(){
 // Initialization of the chatbot.
 chatbot("");

 // Send a Message, When the form will be submitted.
 $("form").submit(function(e){
   // Prevent the form submission.
   e.preventDefault();
   if($("input").val()){
     // Send the message.
     chatbot($("input").val());
     // Display the message.
     $('#messages').append('<p>'+$("input").val()+'</p>');
     clearText();
       }
 })
})

// A function for sending message to the backend and getting result.
function chatbot(message){
var apiUrl = "https://ikeachatbot.eu-gb.mybluemix.net/api.php?message=" + message + "&context=" + context;
$.ajax(apiUrl, {
    success: function(response){
       console.log(response);
       $('#messages').append('<p>'+response+'</p>');
     // Upodate the conversation state.
     context = JSON.stringify(JSON.parse(response).context);
	
    }
 });
}

function clearText()  
{
    document.getElementById('message').value = "";
}
