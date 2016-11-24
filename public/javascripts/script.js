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
