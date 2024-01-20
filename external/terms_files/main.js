$(function () {
    $(document).on("click", ".x-download-button", function () {
        try {
            document.location.href = $(this).attr('href');
            let $popup = $(document).find(".popup-install");
            $popup.fadeIn(300);
        } catch (e) {
            console.log('error');
            console.log(e);
        }
    });

    $(document).on("click", ".popup-install-cancel", function () {
        let $popup = $(this).closest(".popup-install");
        $popup.fadeOut(300);
    });

    $(document).on("click", ".question-lint[data-toggle='collapse']", function () {
        $(this).siblings(".question-lint:not(.collapsed)").addClass("collapsed");
        $(this).siblings(".collapse").collapse("hide");
    });

    $(document).on("submit", "#contact_form", function () {
        showPreloader();
    });
});

function getMoreGames(moreButton) {
    $.ajax({
        method: "GET",
        url: $(moreButton).attr('data-more-url'),
        beforeSend: () => {
            showPreloader();
        },
        success: function (response) {
            $('.recommended-games__list').append(response.data);
            if (!response.more) {
                $(moreButton).hide();
            } else {
                $(moreButton).attr('data-more-url',response.more);
            }
        },
        complete: () => hidePreloader()
    });
}