$(document).ready(function() {
  $("button#hello").click(function() {
    $("#cat").prepend("<li>Meow!</li>");
    $("#dog").prepend("<li>Bark!</li>");
    $("#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("#dog").children("li").first().click(function() {
      $(this).remove();
    });

  });
  $("button#goodbye").click(function() {
    $("ul").prepend("<li>Goodbye</li>");
  });

  $("#seeyou").click(function() {
    $("ul").prepend("<li>See you later</li>");
  });

  $("button#magic").click(function(){
    $("#img-wrap").css("visibility","hidden")

  });

  $("button#magic2").click(function(){
    $("#img-wrap").css("visibility","visible")

  });


});
