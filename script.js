$(document).ready(function() {           
  $('#fullpage').fullpage({
    anchors:['home-page', 'coding',"art","NGOs","about-contact"],
    menu:"#myNavbar",
    scrollBar: true
  });
//So the Mobile Nav Hides When a Link is Clicked
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
  
  /*
  $("#myNavbar a").click(function(event){
    var $a=$(event.target);
    var $li=$a.closest("li");
    var $ul=$a.closest("ul");
    var $liActive = $ul.find("li.active");
    $liActive.removeClass("active");
    $li.addClass("active");
    
    var target = $a.attr("href").substr(1);
    console.log(target);
    $.fn.fullpage.moveTo(target,0);
    
    event.preventDefault();
  });
  */
});
