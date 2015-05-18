// external js: isotope.pkgd.js

$(document).ready(function() {
    $('#formulario').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                },
                email: {
                    required: true,
                    email: true
                },
                msg:{
                   required: true
                }
            },
            messages: {
                nome: {
                    required: "O campo nome é obrigatório.",
                    minlength: "O campo nome deve conter no mínimo 3 caracteres."
                },
                email: {
                    required: "The email field is required.",
                    email: "The email field must contain a valid email address."
                },
                msg:{
                    required: "The message field is required.",
                },
            }
        });
  
    
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'

  });

    
  // bind filter button click
  $('#filters').on( 'click', '.button', function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
    
    
  $( window ).load(function() {
    $container.isotope({ filter: "*" });
  });
    
    
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ){
    var $buttonGroup = $(buttonGroup);
      
    $buttonGroup.on( 'click', '.button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
    
    
// change is-checked class on buttons
  $('.itens-gallery').each( function( i, buttonGroup ){
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on( 'mouseenter', 'a', function() {
      $(this).children('.mask').addClass('animated fadeOut');
    });
    $buttonGroup.on( 'mouseleave', 'a', function() {
    $buttonGroup.find('.fadeOut').removeClass('fadeOut');
    $(this).children('.mask').addClass('animated fadeIn');
    });
  });
    
    
    // Amina scroll 
    $(window).on("scroll", function(){
        var windowscroll = $(window).scrollTop();
           if(windowscroll >= 890){
              $('.box-list ul > li.many, li.time').addClass('animated bounceInLeft').css('display','block');
              $('.box-list ul > li.center').addClass(' animated  fadeIn').css('display','block');
              $('.box-list ul > li.retina, li.support').addClass('animated bounceInRight').css('display','block');
           }
      if($(window).width() >= 1190){
          
        if(windowscroll >= 1445){
           $('.bt_voltar').css('display','block').addClass('animated fadeIn');
        }
          
        if(windowscroll <= 1490){
           $('.bt_voltar').css('display','none');
        }
      }
        
        checkMenu();
    }); 
  
});



var offset = 300; 
var navigationContainer = $('#cd-nav'), mainNavigation = navigationContainer.find('#cd-main-nav ul');
 
function checkMenu() {
 
    console.log(mainNavigation);
    
	if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
		//add .is-fixed class to #cd-nav 
		//wait for the animation to end  
		//add the .has-transitions class to main navigation (used to bring back transitions)
	} else if ($(window).scrollTop() <= offset) {
		
		//check if the menu is open when scrolling up - for browser that supports transition
		if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
			//close the menu 
			//wait for the transition to end 
			//remove the .is-fixed class from the #cd-nav and the .has-transitions class from main navigation
		} 
 
		//check if the menu is open when scrolling up - fallback if transitions are not supported
		else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
			//no need to wait for the end of transition - close the menu and remove the .is-fixed class from the #cd-nav
		} 
 
		//scrolling up with menu closed
		else {
			//remove the .is-fixed class from the #cd-nav and the .has-transitions class from main navigation
		}
	} 
}
