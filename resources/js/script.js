$(document).ready(function() {
    
    /*Main Functionality of sticky nav bar*/
    $('.js--section-skills').waypoint(function(direction) {
       if(direction == "down") {
           $('nav').addClass('sticky');
       } 
       else {
           $('nav').removeClass('sticky');
       }
    } , {
           offset: '60px;'
    });
    
    /*Scroll on btn from home --> pricing*/
    $('.js--scroll-to-pricing').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-pricing').offset().top}, 1000);
    });
    
    
    /*Nav bar smooth scrolling*/
    $(function(){
        // Select all links with hashes
        $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
         $('html,body').animate({
             scrollTop: target.offset().top
        }, 2000);
        return false;
        }
        }
        });  
    });

    
    /*Animation on scroll*/
    $('.js--section-skills').waypoint(function(direction) {
        $('.js--section-skills').addClass('animated fadeIn');
        
        } , {
                offset: '200px;'

        });
    
    });


    var typed3 = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 50,
    smartBackspace: true, // this is a default
    loop: true
  });