$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    // Following are for 4 buttons. Look things up in the jQuery reference.
    $("#btn1").click(function(){
        $(this).text("ALL YOUR BASE ARE BELONG TO US");
        $("h1").toggle();
    });
    $("#btn4").on("click",function(){
            $("#square4").css("background-color","Purple").animate({ 
            marginTop: "+250px",});
    });
      $("#btn4").click(function(){
        $("#square1").css("background-color","Purple").animate({ 
            marginTop: "-248px",});
});
});



