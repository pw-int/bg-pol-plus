$(document).ready(function () {
    $(".search-form #q").autocomplete({
        serviceUrl: SEARCH_AUTOCOMPLETE_URL,
        type: 'POST',
        deferRequestBy: 300,
        onSearchStart: function (query) {
            if ($.trim(query.query).length < 2) {
                return false;
            }
        },
        onSelect: function (suggestion) {
            showPreloader()
            window.location.href = suggestion.data;
        },
        transformResult: function (response) {
            response = $.parseJSON(response);
            return {
                suggestions: $.map(response.games, function (game) {
                    return {value: game.title, data: game.link};
                })
            };
        },
        minChars: 2,
        showNoSuggestionNotice: true,
        noSuggestionNotice: SEARCH_NO_RESULT
    });

    $(".search-form").on('submit', function(e){
        e.preventDefault();
        return false;
    });
});