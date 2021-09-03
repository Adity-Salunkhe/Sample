$(document).ready(function(){
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function(){
       if($ ('#carouselButton').children('span').hasClass('fa-pause'))
       {
        $('#mycarousel').carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play'); 
       }

       else if($ ('#carouselButton').children('span').hasClass('fa-play'))
       {

        $('#mycarousel').carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause'); 
    
       }
       
    });

    
});


    $('a[href$="#loginModal"]').on( "click", function() {
    $('#loginModal').modal('toggle');
    });


     $('a[href$="#ReserveTable"]').on( "click", function() {
     $('#ReserveTable').modal('toggle');
     }); 