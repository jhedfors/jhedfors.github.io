(function($){
  $(function(){

    $('select').material_select();
    $('.modal-trigger').leanModal({
      starting_top: '0%', // Starting top style attribute
      ending_top: '5%', // Ending top style attribute
    });
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
