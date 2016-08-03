(function($){
  $(function(){

    $('select').material_select();
    $('.modal-trigger').leanModal({
      starting_top: '0%', // Starting top style attribute
      ending_top: '3%', // Ending top style attribute
    });
    $('.parallax').parallax();

    $('a[href^="#p"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));
        console.log(target);
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
