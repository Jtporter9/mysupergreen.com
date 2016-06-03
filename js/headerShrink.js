(function () {
  $(window).on("scroll touchmove", function () {
    $('#header_nav').toggleClass('tiny', $(document).scrollTop() > 20);
});

$(window).on("scroll touchmove", function () {
  $('#main_container_id').toggleClass('new-margin', $(document).scrollTop() > 20);
});
})();
