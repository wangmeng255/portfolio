"use strict"
$(function() {
  //add position:sticky to #topbar
  var topbar = document.getElementById("topbar");
  Stickyfill.add(topbar);
  setTopbarHeight();

  $(window).scroll(function(event) {
    setTopbarHeight();
  });

  $("header").click(function() {
    $(window).scrollTop(0);
  });
});

function setTopbarHeight() {
  var topbar = $("#topbar");
  var rem = parseFloat($("body").css("font-size"));
  if(topbar.offset().top > rem * 37.5)
    topbar.height(rem * 3);
  else topbar.height(1);
}