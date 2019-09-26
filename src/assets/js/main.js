$(document).ready(function(){
    $('.carrossel-tipbar').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [
        {
            breakpoint: 768,
            settings: 'unslick'
        }
        ]
    });
    $(window).on('resize', function () {
        $('.destinos').slick('resize');
    });
});



$(function(){
$(".rolagem").click(function() {
    var href =$(this).attr("href");
    $("body, html").animate({
        scrollTop: $(href).offset().top
        }, 1000)
    });
});

$("#accordionExample").on("click", function(){   
    $(this).find(".seta").toggleClass("rotate-fa");
});

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 };

 $('#link').click(function(e) {
     e.preventDefault();

     if($('.seta').hasClass("rotate-fa")){
         $('.seta').removeClass('rotate-fa')
     } else {
         $('.seta').addClass('rotate-fa')
     }
 });