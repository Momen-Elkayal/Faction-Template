$(function () {
  $(".menu-icon").on("click", function () {
    $(".menu").css("right", "0");
  });

  $(".menu i").on("click", function () {
    $(".menu").css("right", "-250px");
  });
});
