function setBackgroundColor(heightScreen) {
  if (heightScreen > 1000) {
    $("#home-page0").css("background-image", "none");
    $("#home-page0").css("background-color", "#1252ba");
    $("#coding1").css("background-image","none");
    $("#coding1").css("background-color", "#ad7cc9");
    $("#art2").css("background-image", "none");
    $("#art2").css("background-color", "#ea7267");
    $("#NGOs3").css("background-image", "none");
    $("#NGOs3").css("background-color", "#6bea67");
    $("#about-contact4").css("background-image", "none");
    $("#about-contact4").css("background-color", "#edb874");
  }
}

function checkDevice(height, width) {
  var small = [800, 1000];
  var heightIsLower = height < small[0];
  var widthIsLower = width < small[1];
  return (heightIsLower && widthIsLower) ? small : [0, 0];
}

function setUpFullpage(screenSize) {
  $('#fullpage').fullpage({
    anchors:['home-page', 'coding',"art","NGOs","about-contact"],
    menu:"#myNavbar",
    scrollBar: true,
    responsiveHeight: screenSize[0],
    responsiveWidth: screenSize[1],
  });
}


$(document).ready(function() { 
  
  var heightScreen = $(window).height(); 
  var widthScreen = $(window).width();
  console.log(heightScreen + " width = " + widthScreen);
  setBackgroundColor(heightScreen);
  setUpFullpage(checkDevice(heightScreen, widthScreen));      

//So the Mobile Nav Hides When a Link is Clicked
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
  
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
  
  
/* list of objects with job information */
  var job1 = {title: "Chief Operation Officer & Fundraiser",
              employer: '<p><b>Employer: </b><a href="http://ascoderu.ca" target="_blank">Ascoderu</a></p>',
              description: "<p><b>Description: </b>I am supporting the Lokole project of Ascoderu by establishing key-partnerships, producing promotional materials, designing the new website and managing the workload of a team of three people. Lokole aims to bring free emails in rural DRC in 2017.</p>",
              reference: "<p><b>Reference: </b>Nzola Swasisa CEO, ascoderu.opwen@gmail.com</p>"};
   $("#job1").data("job", job1); 
   
   var job2 = {title: "Office & Regional Activist Assistant",
              employer: '<p><b>Employer: </b><a href="https://www.amnesty.ca/" target="_blank">Amnesty International</a></p>',
              description: '<p><b>Description: </b>For months I helped with the organization of events such as the Just Film Festival and the “Focus on Syria” event screening refugees’ documentaries. Further, for 2 weeks I was hired as Office Assistant and I run the office while coordinating high-school volunteers.</p>',
              reference: "<p><b>Reference: </b>Don Wright, DWright@amnesty.ca</p>"};
   $("#job2").data("job", job2);
   
   var job3 = {title: "Research & Project Coordinator",
              employer: '<p><b>Employer: </b><a href="https://www.bccic.ca/" target="_blank">British Columbia Council for International Cooperation (BCCIC)</a></p>',
              description: "<p><b>Description: </b>I have conducted research and coordinated projects. I supervised six UBC students during their internship and I presented at the CASID conference on 1st June 2016 on behalf of the BCCIC. The focus of my research space from international cooperation in small cities to the SDGs. I co-authored and co-edited two reports.</p>",
              reference: "<p><b>Reference: </b>Mike Simpson, mike@bccic.ca</p>"};
   $("#job3").data("job", job3);
              
   var job6 = {title: "General Assistant",
              employer: '<p><b>Employer: </b><a href="http://www.samarcandascs.it/" target="_blank">Samarcanda FairTrade Shop</a></p>',
              description: "<p><b>Description: </b>Samarcanda is a fairtrade social co-operative and while volunteering there I learned about global supply chain, worker’s right infringement and related projects. My role covered cash book keeping, project promotion and other general assistant tasks.</p>",
              reference: "<p><b>Reference: </b>Antonella Capraro, samarcanda.belluno@livecom.it</p>"};
   $("#job6").data("job", job6);      
              
              
  $("a[rel='modal']").click(function(event){
    var clicked = $(this);
    var job = clicked.data("job");

    var $title = $('<div></div>').css("font-size", "30px").html(job.title);
    var $text = $('<div></div>').addClass("subtitle").html(job.employer + job.description + job.reference);
    
    BootstrapDialog.show({
      title: $title,
      message: $text,
    });
  });
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
  
  
  $("#contact-form").hide();
  
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
