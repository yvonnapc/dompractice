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



    $('#blanks form').submit(function(event){
      var person1Input = $("input#person1").val();
      var person2Input = $("input#person2").val();
      var place1Input = $("input#place1").val();
      var animal1Input = $("input#animal1").val();
      var thing1Input = $("input#thing1").val();

      $('.person1').text(person1Input);
      $('.person2').text(person2Input);
      $('.place1').text(place1Input);
      $('.animal1').text(animal1Input);
      $('.thing1').text(thing1Input);

      $('#story').show();

      event.preventDefault();
    })
/*-- Page 2 --*/
  $('#blanks form').submit(function(event){
    var wordlowercase = $("input#lowercase").val();


    $('.phrase').text(wordlowercase.toUpperCase());


    $('#return').show();

    event.preventDefault();
  });
});
