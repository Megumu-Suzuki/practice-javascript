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
//= require jquery
//= require jquery_ujs
//= require activestorage
//= require_tree .


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

// 対象の要素のみを変更する
$(function(){
  $('.square1').on('click', function(){
    $(this).slideUp();
  });
});

// 子要素全てを変更する
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});



$(document).ready(function () {
  $("#images").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'fade',
    // 変化に係る時間(ミリ秒)
    speed : 1000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'bubble',
    // 子要素の種類("div" or "img")
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : true,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 2000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
  });
});


// ページの一番上に遷移
$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
// event.preventDefault(); aタグの機能を無効にするメソッド
    event.preventDefault();
  });
});

// ハンバーガーメニュー
$(function() {
  $('.menu-trigger').on('click', function(event) {
    // クリックされた要素自身（this）のクラスに'active'を追加する
    // これによりCSSが反映される
    // toggleClass class属性の追加と削除を交互に行う
    $(this).toggleClass('active');
    // fadeToggle要素のフェードイン、フェードアウトを切り替える
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

// タブメニュー
$(function() {
  // tabのidが1と等しくない時、非表示にする
  $('#tab-contents .tab[id != "tab1"]').hide();
});
$(function() {
  $('#tab-menu a').on('click', function(event) {
    // 一旦全てを非表示する
    $("#tab-contents .tab").hide();
    $("#tab-menu .active").removeClass("active");
    $(this).addClass("active");
    // .attr()は、HTML要素の属性を取得したり設定できるメソッド
    // 取得してきたhref属性の中身を表示している
    $($(this).attr("href")).show();
    event.preventDefault();
  });
});