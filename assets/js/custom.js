(function($) {
    'use strict';
	
	
	//handle Add To Cart Btn
	$('.ad-to-cart').on('click', function() {
          
		  
		  
		if (localStorage.getItem("c_count") !== null) {
			 
			 localStorage.setItem("c_count",parseInt(localStorage.getItem("c_count"))+1);

		}else{
			
			localStorage.setItem("c_count",1);
				
				
		}
		
		swal("پیام", "محصول شما با موفقیت به سبد خرید افزوده شد", "success");
		
		$('.cart-btn-area span').text(localStorage.getItem("c_count"));
			
		
		  
    });
	
	//handle Add To Cart Btn shop details
	$('.add-to-cart').on('click', function() {
          
		  
		  
		if (localStorage.getItem("c_count") !== null) {
			 
			 localStorage.setItem("c_count",parseInt(localStorage.getItem("c_count"))+1);

		}else{
			
			localStorage.setItem("c_count",1);
				
				
		}
		
		swal("پیام", "محصول شما با موفقیت به سبد خرید افزوده شد", "success");
		
		$('.cart-btn-area span').text(localStorage.getItem("c_count"));
			
		
		  
    });
	
	
	
	
	//Set Cart Count
	if (localStorage.getItem("c_count") !== null) {
			 
			$('.cart-btn-area span').text(localStorage.getItem("c_count"));

	}else{
		
		$('.cart-btn-area span').text("0");
		
	}
		
		
	

    // Mean Menu JS
    jQuery('.mean-menu').meanmenu({ 
        meanScreenWidth: "991"
    });

    // Navbar Area
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >150){  
            $('.navbar-area').addClass("sticky-nav");
        }
        else{
            $('.navbar-area').removeClass("sticky-nav");
        }
    });

    // Others Option For Responsive JS
	$(".side-nav-responsive .dot-menu").on("click", function(){
		$(".side-nav-responsive .container .container").toggleClass("active");
    });

    // Banner Slider 
    $('.banner-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 30,
        nav: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
    })

    // Brand Slider
    $('.brand-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            700:{
                items: 3
            },
            1024:{
                items: 4
            }
        },
    })

    // MixItUp JS
    $('#Container').mixItUp();


	


    // Input Plus & Minus Number JS
    $('.input-counter').each(function() {
        let spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
        
        btnUp.on('click', function() {
            let oldValue = parseFloat(input.val());
			let newVal;
            if (oldValue >= max) {
                newVal = oldValue;
            } else {
                newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function() {
            let oldValue = parseFloat(input.val());
			let newVal;
            if (oldValue <= min) {
                newVal = oldValue;
            } else {
                newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    
    // FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
    });


    // Nice Select JS
    $('select').niceSelect();

    // Back To Top
    $('body').append("<div class='go-top'><i class='bx bx-up-arrow'></i></div>");
    $(window).on('scroll', function() {
        let scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function() {
        $('html, body').animate({
            scrollTop: '0',
        }, 500 );
    });

    // Count Time JS
	function makeTimer() {
		let endTime = new Date("December 30, 2021 17:00:00 PDT");			
		endTime = (Date.parse(endTime)) / 1000;
		let now = new Date();
		now = (Date.parse(now) / 1000);
		let timeLeft = endTime - now;
		let days = Math.floor(timeLeft / 86400); 
		let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>روز</span>");
		$("#hours").html(hours + "<span>ساعت</span>");
		$("#minutes").html(minutes + "<span>دقیقه</span>");
		$("#seconds").html(seconds + "<span>ثانیه</span>");
	}
    setInterval(function() { makeTimer(); }, 300);

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // Handle The Invalid Form...
            formErrorSub();
            submitMSGSub(false, "لطفا آدرس ایمیل خود را به درستی وارد نمایید.");
        } else {
            // Everything Looks Good!
            event.preventDefault();
			
			
			
			let emails = [];

			if (localStorage.getItem("news_latters") !== null) {
				
				emails = JSON.parse(localStorage.getItem("news_latters"));
				emails.push($("#nl-email-field").val());
				localStorage.setItem("news_latters", JSON.stringify(emails));
				
			}else{
				
				emails.push($("#nl-email-field").val());
				localStorage.setItem("news_latters", JSON.stringify(emails));
				
			}

			formSuccessSub();
			
			
			
        }
    });
    
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        swal("پیام", "ممنون از عضویت شما در خبر نامه", "success");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
		 let msgClasses;
        if(valid){
            msgClasses = "validation-success";
        } else {
            msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
        
    

    // Preloader JS
    jQuery(window).on('load',function(){
        jQuery(".preloader").fadeOut(500);
    });

})(jQuery);