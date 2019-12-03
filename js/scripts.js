$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("input#height").val());

    if (height >= 48) {
      $('#under-height').hide();
      $('#over-height').show();
    } else {
      $('#over-height').hide();
      $('#under-height').show();
  }
  });
});
