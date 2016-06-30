"use strict"
$(function() {
  //add position:sticky to #topbar
  var topbar = document.getElementById("topbar");
  Stickyfill.add(topbar);

  $(window).scroll(function(event) {
    var topbar = $("#topbar");
    console.log(topbar.offset().top);
    var rem = $(window).width() / parseFloat($("body").css("font-size"));
    if(topbar.offset().top > rem * 37.5)
      topbar.height(rem * 3);
    console.log(rem * 3);
  });

  $("header").click(function() {
    $(window).scrollTop(0);
  });
});