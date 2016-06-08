$( document ).ready(function() {

  $('#container').on('click', '.question', function() {
      $(this).children('.answer').slideToggle(300);
      $(this).toggleClass('active');
  });

  $('#container').on('keyup','#searchBox', function (event) {
    if ($('#listQuestion').children().length === 0) {
      $('#noResults').css('opacity', '1');
    } else {
      $('#noResults').css('opacity', '0');
    }

  });

});
