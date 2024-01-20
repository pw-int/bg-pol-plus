$(function(){
    $("body").on("click", ".sidebar-item__text", function(){
        let $this = $(this);
        let $mainWrapper = $this.closest(".sidebar-item");
        if($this.closest('.has-subcategories').length){
            let $list = $this.siblings('.sidebar-item__list');
            let list_height = $list.attr("data-original-height");
            let is_expanded = $mainWrapper.hasClass("expanded");

            if(list_height && !is_expanded) {
                $list.css("height", list_height + 'px');
                $mainWrapper.addClass('expanded');
            }else{
                $list.css("height", '0px');
                $mainWrapper.removeClass('expanded');
            }
        }
    });

    $("body").find(".sidebar-item__list").each(function(){
        let $this = $(this);
        let height = $this.outerHeight();
        $this.attr("data-original-height", height);
        $this.siblings(".sidebar-item__text").trigger("click");
    });

    $("body").on("click", ".toggle_sidebar", function(e){
        e.preventDefault();
        toggleSidebar();
    });

    $("body").on("click", function(e){
        let $target = $(e.target);

        if(
            !$target.closest('.sidebar').length
            && $("body").find(".sidebar").hasClass("opened")
            && !$target.closest('.toggle_sidebar').length
            && !$target.hasClass('.toggle_sidebar')
        ){
            toggleSidebar();
        }
    });
});

function toggleSidebar(){
    let $sidebar = $("body").find(".sidebar");
    $sidebar.toggleClass("opened");
}
