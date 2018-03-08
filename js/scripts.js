//User Logic

  $("#btn").click(function(){
  $("music-shuffle.html").addclass("animated slideIn");
  });
//==================================================================================================================
//This will make text appear as a fade in.
var $el = $(".slideText1:first"), text = $el.text(),
  words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
  html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
$(this).delay(i*100).fadeIn(200);
});
var $el = $(".slideText2:first"), text = $el.text(),
  words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
  html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
$(this).delay(i*400).fadeIn(500);
});
var $el = $(".slideText3:first"), text = $el.text(),
  words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
  html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
$(this).delay(i*600).fadeIn(700);
});
var $el = $(".slideText4:first"), text = $el.text(),
  words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
  html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
$(this).delay(i*900).fadeIn(800);
});
//=======================AUDIO JS============================================================================



$(document).ready(function(){
  var song=$("#playlist li a").attr('value');

  /*hide the audio tag*/
  $("audio").hide();
  /*swtich between play and pause*/
    audioplayer();
    skip();
    replay();
  $("#play").click(function(){
    $("#play").hide();
    $("#pause").show();
  });
  $("#pause").click(function(){
    $("#pause").hide();
    $("#play").show();
  });
  /*connect the icon play and audio play*/
  $("#play").click(function(){
    $("audio").trigger("play");
  });
  $("#pause").click(function(){
    $("audio").trigger("pause");
  });

//===================ICONS JS==============================================================================
//show funfact 1
$("#fun1").click(function(){
  $("#funfact1").toggle();

});
//show funfact 2
$("#fun2").click(function(){
  $("#funfact2").toggle();

});
//show funfact 3
$("#fun3").click(function(){
  $("#funfact3").toggle();

});
$("#fun4").click(function(){
  $("#funfact4").toggle();

});
//add effect to funfact icons
$("img").hover(function(){
  $(this).removeClass()
  $(this).addClass("animated tada");
});

  //Business Logic
  //==========================================AUDIO JS======================================================================
  function audioplayer(){
    $("#musicplayer")[0].src=$("#playlist li a")[0];
    var song=$("#playlist li a").attr('value');
      $("#musicdetails").html(song);
    $("#playlist li a").click(function(event){
      event.preventDefault();
    });
  };
  function skip(){
    for(var i=1;i<this.length;i++);
    $("#skipforward").click(function(){
    var this1 = $("#musicplayer")[0].src=$("#playlist li a")[i++];
      var song= $(this1).attr('value');
        $("#musicdetails").html(song);
      $("#musicplayer")[0].play();

    });
  };
    function replay(){
      for(var i=0;i<this.length;i--);
      while((i=0) || (i=this.length)){
      $("#musicplayer")[0].src=$("#playlist li a")[0];
      $("audio").trigger("pause");
      $("audio").trigger("play");
      $("audio").trigger("restart");
    };
      $("#skipbackward").click(function(){
        var this2=$("#musicplayer")[0].src=$("#playlist li a")[i--];
          var song= $(this2).attr('value');
            $("#musicdetails").html(song);
        $("#musicplayer")[0].play();
        $("#pause").show();
      });
      };
      particlesJS.load('particles-js', 'js/package.json', function() {
 console.log('callback - particles.js config loaded');
});
      //==========================================================================================================================
    });
