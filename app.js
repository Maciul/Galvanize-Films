$( document ).ready(function() {
    console.log( "ready!" );

    $('#myForm').on('submit', function(event) {
    event.preventDefault();
    $.post('https://mighty-eyrie-15280.herokuapp.com/films', $(this).serialize());
    });
  });
