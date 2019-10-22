$(document).ready(function() {
  // $(".flash1").click(function() {
  //   $(".def").toggle();
  //   $(".term").toggle();
  // });

  $(".col-md-4").on('click', function() {
    console.log($(this));
    $(this).find(".def").toggle();
    $(this).find(".term").toggle();

  });
});
