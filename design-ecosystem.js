$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    console.log("hello")
    $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
  });
});