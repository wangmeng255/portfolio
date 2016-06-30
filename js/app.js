"use strict"
$(function() {
  //add fonts to head
  $("head").append("<link href='//fonts.googleapis.com/css?family=Cinzel+Decorative'" + 
                   " rel='stylesheet' type='text/css'>");
  $("head").append("<link href='//fonts.googleapis.com/css?family=Dosis'" + 
                   " rel='stylesheet' type='text/css'>");
  $("head").append("<link href='//fonts.googleapis.com/css?family=Amiri'" + 
                   " rel='stylesheet' type='text/css'>");
  //add position:sticky to #topbar
  var topbar = document.getElementById("topbar");
  Stickyfill.add(topbar);

  $(window).scroll(function(event) {
    var topbar = $("#topbar");
    var rem = parseFloat($("body").css("font-size"));
    if(topbar.offset().top > rem * 37.5)
      topbar.height(rem * 3);
    else topbar.height(1);
  });

  $("header").click(function() {
    $(window).scrollTop(0);
  });
});