function showPreloader() {
    $.fancybox.open({
        src: '/images/bitegames_preloader_light.gif',
        smallBtn: false,
        toolbar: false,
        slideClass: 'fancybox_bitegames_loader'
    });
}

function hidePreloader() {
    $.fancybox.close(true);
}

$(function () {
    $(document).on("click", "a", function () {
        if (
            !$(this).hasClass('x-download-button')
            && !$(this).hasClass('unsubscription-confirm-by-sms')
            && $(this).attr('href').indexOf("#") === -1
        ) {
            showPreloader();
        }
    });
})