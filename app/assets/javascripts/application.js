// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require jquery_ujs

$(function(){
  $('.box1').slideDown(2000);
});

$(function(){
  $('.box2').slideUp(1000);
  $('.box2').show(1000);
});

$(function(){
  $('.box3').show(1000);
  $('.box3').css({'background-color': '#FF0'});
});

$(function(){
  $('.box4').hide(1000);
  $('.box4').slideDown(1000);
});

$(function(){
  $('.box5').show(1000);
  $('.box5').mouseover(function(){
    $('.box5').addClass('box-over');
  });
  $('.box5').mouseout(function(){
    $('.box5').removeClass('box-over');
  });
});

$(function(){
  $('.box6').hide(250);
  $('.box6').show(1750);
  $('.box6').on('click', function(){
    $('.box6').addClass('box-click');
  });
  $('.box6').mouseout(function(){
    $('.box6').removeClass('box-click');
  });
});