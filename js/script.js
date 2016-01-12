$(document).ready(function() {
  $("button#hello").click(function() {
    $("#cat").prepend("<li>Meow!</li>");
    $("#dog").prepend("<li>Bark!</li>");
    $("#cat").children("li").first().click(function() {
      alert("MEOW");
    $("#dog").children("li").click(function() {
      alert("BARK");

    });
  });
  $("button#goodbye").click(function() {
    $("ul").prepend("<li>Goodbye</li>");
  });

  $("#seeyou").click(function() {
    $("ul").prepend("<li>See you later</li>");
  })
});
