$( document ).ready(function() {

  $('#container').on('click', '.question', function() {
      $(this).find('.answer').slideToggle(300);
      $(this).toggleClass('active');
  });

  $('#container').on('keyup','#searchBox', function (event) {
    if ($('#listQuestion').children().length === 0) {
      $('#noResults').css('display', 'block');
    } else {
      $('#noResults').css('display', 'none');
    }

  });

});
