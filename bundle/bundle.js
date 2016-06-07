$( document ).ready(function() {

  $('#container').on('click', '.question', function() {
    $(this).children('.answer').slideToggle(300);

  });



});
