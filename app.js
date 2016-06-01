$( document ).ready(function() {
    console.log( "ready!" );

  $('#myForm').on('submit', function(event) {
  event.preventDefault();
  var $section = $('section');
  $.post('https://mighty-eyrie-15280.herokuapp.com/films', $(this).serialize()
  ).done(function(result) {
    $section.empty();
    $section.append(result.message);
    $section.fadeIn(500).delay(2000).fadeOut(500);
  }).fail(function(reject) {
    console.log(reject)
    console.log(typeof reject)
    $section.empty();
    $section.append(JSON.parse(reject.responseText).message);
    $section.fadeIn(500).delay(2000).fadeOut(500);
  });
    });
  $('#movie-form').on('submit', function(event){
    event.preventDefault();
    var movie = $('#movie').val();
    $.get('https://galvanize-cors-proxy.herokuapp.com/http://api.themoviedb.org/3/search/movie/?api_key=f508e8747143c1e335302479a3fb96fb&query='+movie, function(result){
      var $results = $('.results');
      result = result.results[0];
      console.log(result);
      $results.empty();
      $results.append("<div><h1>"+result.title+"</h1></div>");
      $results.append("<p>"+result.overview+"</p>");
      $results.show();
      $('html, body').animate({
        scrollTop: $(".results").offset().top
    }, 2000);
    });
  });
});
