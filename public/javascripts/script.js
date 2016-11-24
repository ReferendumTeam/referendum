$(document).ready(function () {

	$(".main_title button").click(function(){

		if ($(this).hasClass('button_y'))
		 
		 {
			 $(this).addClass("active");
			 $('button_n').removeClass("active");

			 $(".yes_box").removeClass("onMobileHide");
			 $(".no_box").addClass("onMobileHide");

			 if($(".main_title button.button_n").hasClass('active')){
				 
				 $(".main_title button.button_n").removeClass("active");
			 
			 }
		 }

	 	else if ($(this).hasClass('button_n'))
		
		{
			 $(this).addClass("active");
			 $('button_y').removeClass("active");

			 $(".no_box").removeClass("onMobileHide");
			 $(".yes_box").addClass("onMobileHide");

			 if($(".main_title button.button_y").hasClass('active')){
				 
				 $(".main_title button.button_y").removeClass("active");
			 
			 }
		 }
 	});


 	

})



$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
                        //se non siamo in cima alla pagina
            $('#top').fadeIn(); //faccio apparire il box    
        } else {
                        //altrimenti (il visitatore è in cima alla pagina scrollTop = 0)
            $('#top').fadeOut();//Il box scompare
        }
    });//Allo scroll function
 
    $('#top').click(function() {
                //Se clicco sul box torno su (scrollTop:0) con un timing di animazione.
        $('body,html').animate({scrollTop:0},800);
    });//Click
 
});//DOM