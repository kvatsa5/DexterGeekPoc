//Some code for Home.html

$(document).ready (function (){
setTimeout(function() {   
   $("#text-1").hide();
   $("#genre").css("display","block");
}, 4000);
});

//Some code for Home.html ends

//Index.html content

//The code to start the number counter on first loading of page
$(".num").counterUp({delay:10,time:1200});


//The code to execute number counter each time course section is accessed
$(".course-nav").click(function(){
 $(".num").counterUp({delay:10,time:1200});
 });
 
 
 
//The code to submit Contact form's data using POST type REST web service
var alertContactFormSubmission = function(userName){
	$("#alert-contact-form").css("display","block");	
	$("#alert-user-submission").text("Hi "+userName+" !! Form is successfully Submitted");
	$("#alert-contact-form").fadeOut(3700);
};


$(".contact-form-btn").click(function(){
	var isValidForm = true;
	
	if(isValidForm){
	setTimeout(alertContactFormSubmission($(".contact-form-name").val()),4000);
	//$("#alert-contact-form").css("display","none");
	var requestJson = {
		name: $(".contact-form-name").val(),
		email : $(".contact-form-email").val(),
		phone: $(".contact-form-phone").val(),
		message : $(".contact-form-message").val()		
	}	
	var url = "https://mail-service-demo-ab.herokuapp.com/contactUs/form-data";
	sendPOSTRequest(url,requestJson);	
	}
});




//CommonMethod for POST calls starts
var sendPOSTRequest = function(url , requestJson){
	var data = 	JSON.stringify(requestJson);
$.ajax({
  url:url,
  type:"POST",
  data:data,
  contentType:"application/json; charset=utf-8",
  dataType:"json",
  success: function(response){
   console.log(response);
  }
})
};
//CommonMethod for POST calls ends


$(".service-card").hover(function(){
	$(".service-card .hidden-info");
});

