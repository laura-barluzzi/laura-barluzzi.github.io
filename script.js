$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors:['profile', 'projects', 'education'],
    sectionsColor: ['#adcbe3', '#adcbe3', '#adcbe3'],
    menu:"#myNavbar",
    scrollOverflow: true,
    paddingTop: '80px',
    responsiveWidth: 700,
    afterRender: function() {
      $('#website-content').removeClass('hidden');
    }
  });

  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

});
