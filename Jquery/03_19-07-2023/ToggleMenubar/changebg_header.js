$(document).ready(function () {
    $(window).scroll(function () {
        $current = $(this).scrollTop();
        if ($current > 0) {
            $("header").addClass("header-fixed")
        } else {
            $("header").removeClass("header-fixed")
        }
    })
})