const $menu = $(".navbar__menu");
const $button = $("#toggle");

$menu.addClass("hidden"); // initially hide the menu

// when you click on the button
$button.on("click", function () {
  if ($menu.hasClass("hidden")) {
    $menu.removeClass("hidden");
    $menu.addClass("visible");
  } else {
    $menu.removeClass("visible");
    $menu.addClass("hidden");
  }
});