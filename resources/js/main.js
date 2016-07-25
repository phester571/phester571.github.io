$(function(){
  $('a[href^="#"]').onclick(function(event){
    var target = $(this).attr('href');
    var strip = target.slice(1);
    var anchor = $("a[name='" + strip + "']");

    event.preventDefault();
    
    $('html, body').animate(function(){
      scrollTop: anchor.offset().top
    }, 'slow');
  });
});
