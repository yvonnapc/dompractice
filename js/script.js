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

/* This is for page.html */


  $(document).ready(function(){
    $('#blanks form').submit(function(){
      $(".person1").text("blahblah");
      $(".person2").text("blahblah");
      $(".place1").text("blahblah");
      $(".animal1").text("blahblah");
      $(".thing1").text("blahblah");

    $('#story').show();
    })
  });

});
