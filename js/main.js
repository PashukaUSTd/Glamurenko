$('.table_button').click(function () {
    $('.form').removeClass('remove');
    $('.form').addClass('flex');
})

$('.close').click(function (event) {
    event.preventDefault();
    $('.form').removeClass('flex');
    $('.form').addClass('remove');
})

$('.packs_button').click(function () {
    $('.form').removeClass('remove');
    $('.form').addClass('flex');
})

$('.up').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 700);
    return false;
});
